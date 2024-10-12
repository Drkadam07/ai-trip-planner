import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import Login from '../auth/Login.page';

export default function Profile() {
  const Navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const fetchUserData = async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            // console.log('No user data found');
            Navigate("/login")
            // toast.error('No user data found');
         
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Error fetching user data');
        } finally {
          setLoading(false);
        }
      } else {
        console.log('User is not logged in');
        // toast.error('User is not logged in');
        setLoading(false); 
      }
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array to run this effect once
 async function handleLogout(){
    try
    {
        await auth.signOut();
        console.log('Logged out successfully');
        Navigate('/login')

    }
    catch(error)
    {
        console.error('Error logging out:', error.message);
        
    }
    
 }


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : userDetails ? (
        <>
          <h1>{userDetails.username}</h1>
          <div>
            <h5>{userDetails.email}</h5>
          </div>
          <button onClick={handleLogout} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Logout
</button>
        </>
      ) : (
        <div onLoad={Navigate('/Login')}>No user data found
        </div>
      )}
    </div>
  );
}
