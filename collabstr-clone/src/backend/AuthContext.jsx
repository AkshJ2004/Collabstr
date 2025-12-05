import { createContext, useContext, useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, appleProvider } from './firebase';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    // Get user role from Firestore
    const getUserRole = async (uid) => {
        try {
            const userDoc = await getDoc(doc(db, 'users', uid));
            if (userDoc.exists()) {
                return userDoc.data().role || 'user';
            }
            return 'user';
        } catch (error) {
            console.error('Error getting user role:', error);
            return 'user';
        }
    };

    // Create user document in Firestore
    const createUserDocument = async (user, role = 'user') => {
        try {
            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                await setDoc(userRef, {
                    email: user.email,
                    displayName: user.displayName || '',
                    photoURL: user.photoURL || '',
                    role: role,
                    createdAt: new Date().toISOString()
                });
            }
        } catch (error) {
            console.error('Error creating user document:', error);
        }
    };

    // Email/Password Login
    const login = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const role = await getUserRole(result.user.uid);
            setUserRole(role);
            return { success: true, user: result.user, role };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Google Login
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await createUserDocument(result.user);
            const role = await getUserRole(result.user.uid);
            setUserRole(role);
            return { success: true, user: result.user, role };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Apple Login
    const loginWithApple = async () => {
        try {
            const result = await signInWithPopup(auth, appleProvider);
            await createUserDocument(result.user);
            const role = await getUserRole(result.user.uid);
            setUserRole(role);
            return { success: true, user: result.user, role };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Logout
    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setUserRole(null);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Password Reset
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Listen to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const role = await getUserRole(currentUser.uid);
                setUserRole(role);
            } else {
                setUser(null);
                setUserRole(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        user,
        userRole,
        loading,
        login,
        loginWithGoogle,
        loginWithApple,
        logout,
        resetPassword,
        isAdmin: userRole === 'admin',
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
