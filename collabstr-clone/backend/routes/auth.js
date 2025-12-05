const express = require('express');
const router = express.Router();
const { auth, db } = require('../config/firebase');
const { verifyToken } = require('../middleware/auth');

// Verify token and get user info
router.get('/verify', verifyToken, async (req, res) => {
    try {
        const userDoc = await db.collection('users').doc(req.user.uid).get();
        const userData = userDoc.exists ? userDoc.data() : {};

        res.json({
            success: true,
            user: {
                uid: req.user.uid,
                email: req.user.email,
                displayName: userData.displayName || req.user.name,
                photoURL: userData.photoURL || req.user.picture,
                role: userData.role || 'user'
            }
        });
    } catch (error) {
        console.error('Verify error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create or update user document after login
router.post('/sync-user', verifyToken, async (req, res) => {
    try {
        const userRef = db.collection('users').doc(req.user.uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            // Create new user document
            await userRef.set({
                email: req.user.email,
                displayName: req.user.name || '',
                photoURL: req.user.picture || '',
                role: 'user',
                createdAt: new Date().toISOString()
            });
        }

        const updatedDoc = await userRef.get();
        res.json({
            success: true,
            user: { uid: req.user.uid, ...updatedDoc.data() }
        });
    } catch (error) {
        console.error('Sync user error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get current user profile
router.get('/me', verifyToken, async (req, res) => {
    try {
        const userDoc = await db.collection('users').doc(req.user.uid).get();

        if (!userDoc.exists) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.json({
            success: true,
            user: { uid: req.user.uid, ...userDoc.data() }
        });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
