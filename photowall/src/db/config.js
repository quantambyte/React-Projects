// import firebase from 'firebase';
// import('firebase/database');
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAQOgRVUkIuoVe3n8BKizYneT4lh_ys9iQ',
  authDomain:
    'photo-gallery-geek-freaks.firebaseapp.com',
  databaseURL:
    'https://photo-gallery-geek-freaks-default-rtdb.firebaseio.com',
  projectId: 'photo-gallery-geek-freaks',
  storageBucket:
    'photo-gallery-geek-freaks.appspot.com',
  messagingSenderId: '801831064313',
  appId: '1:801831064313:web:e6e0c6a3c196274d1ac828',
  measurementId: 'G-VSSHJW5S9C',
};

const app = initializeApp(firebaseConfig);

// db
// export const database = firebase.database(app);
export const database = getFirestore(app);
