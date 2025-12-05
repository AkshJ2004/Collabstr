const { auth, db } = require('../config/firebase');

// Middleware to verify Firebase ID token
const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const idToken = authHeader.split('Bearer ')[1];

    try {
        const decodedToken = await auth.verifyIdToken(idToken);
        req.user = decodedToken;

        // Get user role from Firestore
        const userDoc = await db.collection('users').doc(decodedToken.uid).get();
        req.userRole = userDoc.exists ? userDoc.data().role : 'user';

        next();
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

// Middleware to check admin role
const requireAdmin = async (req, res, next) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
};

module.exports = { verifyToken, requireAdmin };
