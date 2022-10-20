import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjwUXyKwHWq5qeU9axo9ugS5WUtEMXSuU",
  authDomain: "react-ezbuy.firebaseapp.com",
  projectId: "react-ezbuy",
  storageBucket: "react-ezbuy.appspot.com",
  messagingSenderId: "920760696476",
  appId: "1:920760696476:web:4595f307753d0fe8a0b759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export async function getItems() {
  const collectionRef = collection(database, "autos");
  let snapshotDB = await getDocs(collectionRef);

  let dataDocs = snapshotDB.docs.map((documento) => {
    return { ...documento.data(), id: documento.id };
  });
  return dataDocs;
}

export async function getItemsByCategory(cat) {
  const collectionRef = collection(database, "autos");
  const queryCategory = query(collectionRef, where("category", "==", cat));
  const respuesta = await getDocs(queryCategory);
  let dataDocs = respuesta.docs.map((documento) => {
    return { ...documento.data(), id: documento.id };
  });
  return dataDocs;
}

export async function getSingleItem(idItem) {
  try {
    const docRef = doc(database, "autos", idItem);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.log(error);
  }
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(database, "orders");
  let respuesta = await addDoc(collectionRef, orderData);
  return respuesta.id;
}

export default database;
