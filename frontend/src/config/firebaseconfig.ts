import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { environment } from "src/environments/environment";

// Import other Firebase services you need (e.g., Storage, Realtime Database)

// Initialize Firebase
const app: FirebaseApp = initializeApp(environment.firebaseConfig);

// Get references to Firebase services
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);
// Get references to other services you need

// Export the initialized instances
export { app, db, auth };
// Export other services you need
