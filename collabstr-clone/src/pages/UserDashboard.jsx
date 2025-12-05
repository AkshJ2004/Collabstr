import { Link } from 'react-router-dom';
import { User, Settings, MessageSquare, ShoppingCart, Heart, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../backend/AuthContext';

const UserDashboard = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    const menuItems = [
        { icon: User, label: 'Profile', path: '/dashboard/profile' },
        { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages', badge: 3 },
        { icon: ShoppingCart, label: 'Orders', path: '/dashboard/orders' },
        { icon: Heart, label: 'Saved Creators', path: '/dashboard/saved' },
        { icon: Bell, label: 'Notifications', path: '/dashboard/notifications', badge: 5 },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold text-gray-900">collabstr</Link>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.email}&background=random`}
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="text-gray-700 font-medium">{user?.displayName || user?.email}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <aside className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm p-4">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dashboard</h2>
                            <nav className="space-y-1">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={20} />
                                            <span>{item.label}</span>
                                        </div>
                                        {item.badge && (
                                            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <LogOut size={20} />
                                    <span>Logout</span>
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h1>
                            <p className="text-gray-600">Here's what's happening with your account.</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="text-gray-500 text-sm mb-1">Active Orders</h3>
                                <p className="text-3xl font-bold text-gray-900">0</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="text-gray-500 text-sm mb-1">Saved Creators</h3>
                                <p className="text-3xl font-bold text-gray-900">12</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="text-gray-500 text-sm mb-1">Total Spent</h3>
                                <p className="text-3xl font-bold text-gray-900">$0</p>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                            <div className="text-center py-12 text-gray-500">
                                <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                                <p>No recent activity</p>
                                <Link to="/" className="text-pink-500 hover:text-pink-600 mt-2 inline-block">
                                    Browse Creators
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
