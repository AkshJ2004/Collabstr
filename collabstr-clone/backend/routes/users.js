const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const { verifyToken, requireAdmin } = require('../middleware/auth');

// Get all users (Admin only)
router.get('/', verifyToken, requireAdmin, async (req, res) => {
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.json({ success: true, users });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get single user
router.get('/:id', verifyToken, async (req, res) => {
    try {
        // Only allow users to view their own profile or admins to view any
        if (req.user.uid !== req.params.id && req.userRole !== 'admin') {
            return res.status(403).json({ success: false, error: 'Access denied' });
        }

        const userDoc = await db.collection('users').doc(req.params.id).get();

        if (!userDoc.exists) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.json({
            success: true,
            user: { id: userDoc.id, ...userDoc.data() }
        });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update user role (Admin only)
router.patch('/:id/role', verifyToken, requireAdmin, async (req, res) => {
    try {
        const { role } = req.body;

        if (!['user', 'admin', 'brand', 'creator'].includes(role)) {
            return res.status(400).json({ success: false, error: 'Invalid role' });
        }

        await db.collection('users').doc(req.params.id).update({ role });

        res.json({ success: true, message: 'Role updated successfully' });
    } catch (error) {
        console.error('Update role error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update user profile
router.patch('/:id', verifyToken, async (req, res) => {
    try {
        // Only allow users to update their own profile or admins
        if (req.user.uid !== req.params.id && req.userRole !== 'admin') {
            return res.status(403).json({ success: false, error: 'Access denied' });
        }

        const { displayName, photoURL, bio } = req.body;
        const updates = {};

        if (displayName) updates.displayName = displayName;
        if (photoURL) updates.photoURL = photoURL;
        if (bio) updates.bio = bio;
        updates.updatedAt = new Date().toISOString();

        await db.collection('users').doc(req.params.id).update(updates);

        res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
