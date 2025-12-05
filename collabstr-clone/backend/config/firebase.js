const admin = require('firebase-admin');
const path = require('path');

// Load service account key directly from file
const serviceAccountPath = path.join(__dirname, '..', 'serviceAccountKey.json');

try {
    const serviceAccount = require(serviceAccountPath);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: serviceAccount.project_id
    });

    console.log('Firebase Admin initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase Admin:', error.message);
    console.log('Make sure serviceAccountKey.json exists in the backend folder');
}

const auth = admin.auth();
const db = admin.firestore();

module.exports = { admin, auth, db };
