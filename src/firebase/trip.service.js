import { db } from "./firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const generateTrip = async (tripData) => {
  const docRef = await addDoc(collection(db, "trips"), tripData);
  return docRef.id;
};

export const fetchMyTrips = async (userId) => {
  const queryObj = query(
    collection(db, "trips"),
    where("userId", "==", userId)
  );
  const querySnapShot = await getDocs(queryObj);
  const trips = [];
  querySnapShot.forEach((doc) => trips.push({ id: doc.id, ...doc.data }));
  return trips;
};
