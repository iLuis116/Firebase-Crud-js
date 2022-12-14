 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import {   getFirestore,
            collection,
            addDoc,
            getDocs,
            deleteDoc, 
            onSnapshot,
            doc, 
            getDoc,
            updateDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyACsjyVPBHGSRwGbPR7v_A3ZE6JNRVBzNI",
   authDomain: "fir-crud-33dd6.firebaseapp.com",
   projectId: "fir-crud-33dd6",
   storageBucket: "fir-crud-33dd6.appspot.com",
   messagingSenderId: "839628503064",
   appId: "1:839628503064:web:65c937036b92b25dd6eb6d"
 };

 // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore();

    export const saveTask = (title, description) => 
    addDoc(collection(db, "tasks"), {title, description});
    
    export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);

    export const getTasks = () => getDocs(collection(db, "tasks"));

    export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

    export const getTask = (id) => getDoc(doc(db, "tasks", id));

    export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "tasks", id), newFields);
