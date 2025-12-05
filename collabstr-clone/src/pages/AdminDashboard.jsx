import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingCart, DollarSign, BarChart3, Settings, LogOut, Search, UserCheck, UserX } from 'lucide-react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../backend/firebase';
import { useAuth } from '../backend/AuthContext';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const usersSnapshot = await getDocs(collection(db, 'users'));
            const usersList = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(usersList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
        setLoading(false);
    };

    const toggleUserRole = async (userId, currentRole) => {
        const newRole = currentRole === 'admin' ? 'user' : 'admin';
        try {
            await updateDoc(doc(db, 'users', userId), { role: newRole });
            setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const handleLogout = async () => {
        await logout();
    };

    const filteredUsers = users.filter(u =>
        u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const stats = [
        { label: 'Total Users', value: users.length, icon: Users, color: 'blue' },
        { label: 'Admins', value: users.filter(u => u.role === 'admin').length, icon: UserCheck, color: 'green' },
        { label: 'Total Orders', value: 0, icon: ShoppingCart, color: 'purple' },
        { label: 'Revenue', value: '$0', icon: DollarSign, color: 'pink' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-xl font-bold">collabstr</Link>
                        <span className="bg-pink-500 text-xs px-2 py-1 rounded-full">Admin</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-300">{user?.email}</span>
                        <button onClick={handleLogout} className="text-gray-300 hover:text-white">
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                                    <stat.icon size={24} className={`text-${stat.color}-500`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
                            <div className="relative">
                                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredUsers.map((userData) => (
                                        <tr key={userData.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={userData.photoURL || `https://ui-avatars.com/api/?name=${userData.email}&background=random`}
                                                        alt=""
                                                        className="w-10 h-10 rounded-full"
                                                    />
                                                    <span className="font-medium text-gray-900">{userData.displayName || 'No name'}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{userData.email}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-xs rounded-full ${userData.role === 'admin'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {userData.role || 'user'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 text-sm">
                                                {userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => toggleUserRole(userData.id, userData.role)}
                                                    className={`px-3 py-1 text-xs rounded-lg ${userData.role === 'admin'
                                                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                                            : 'bg-green-100 text-green-600 hover:bg-green-200'
                                                        }`}
                                                >
                                                    {userData.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {filteredUsers.length === 0 && (
                                <div className="p-12 text-center text-gray-500">
                                    No users found
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
