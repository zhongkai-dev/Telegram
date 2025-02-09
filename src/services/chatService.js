import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getMessages = (callback) => {
  const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
  return onSnapshot(q, (querySnapshot) => {
    const messages = querySnapshot.docs.map(doc => doc.data());
    callback(messages);
  });
};

const sendMessage = async (uid, text) => {
  await addDoc(collection(db, 'messages'), {
    uid,
    text,
    timestamp: new Date()
  });
};

export { getMessages, sendMessage };