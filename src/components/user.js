import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState(null);
  let start = true;
  axios.defaults.withCredentials = true;
  
  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user', {
        withCredentials: true,
      });

      if (response.status === 200) {
        const userData = response.data.user; // Adjust the property name as needed
        setUserData(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/refresh', {
        withCredentials: true,
      });

      if (response.status === 200) {
        const userData = response.data.user; // Adjust the property name as needed
        setUserData(userData);
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  useEffect(() => {
    // Initial fetch of user data
    if(start){
        start =false;
        fetchUser();
    }

    // Set up token refreshing at regular intervals
    const interval = setInterval(() => {
      refreshToken();
    }, 1000 * 29);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(userData)


  return (
    <div>
      {userData ? (
        <>
        {/* <h1>{userData.userName}</h1> */}
        <h1>{userData.fullName}</h1>
        </> // Adjust the property name as needed
      ) : (
        <p>Loading user data...</p>
      )}
      {/* <h2>Hello</h2> */}
    </div>
  );
};

export default User;
