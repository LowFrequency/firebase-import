// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config/firebase.js');
const serviceAccount = require('./config/service.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    await firestoreService.restore('./data/users.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log('Upload failed:', error);
  }
};

jsonToFirestore();
