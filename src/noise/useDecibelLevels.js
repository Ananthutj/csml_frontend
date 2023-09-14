import { useState, useEffect } from 'react';
import { dbNoise } from './../firebase.config';
import { collection, getDocs, onSnapshot, query, orderBy, limit } from 'firebase/firestore';

// Define a custom hook that returns the decibelLevels variable and a function to refresh it
export function useDecibelLevels() {
  // Get a reference to a query that filters by timestamp
  const decibelLevelsRef = collection(dbNoise, 'noise/sensor_data/mlG83Q7Wk6Zr8l7fijgDqf3SxcV2');
  const levelQuery = query(decibelLevelsRef, orderBy('timestamp', 'asc'),);

  const [decibelLevels, setDecibelLevels] = useState([{ level: 0, time: 0 }]);

  // Define a function to fetch the data once
  const fetchDecibelLevels = async () => {
    await getDocs(levelQuery).then((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().data), time: parseInt(doc.data().timestamp) }));
      setDecibelLevels(data);

      console.log("Decibels: ", data);
    });
  };

  // Define a function to listen for real-time updates
  const subscribeToDecibelLevels = () => {
    const limitQuery = query(decibelLevelsRef, orderBy('timestamp', 'desc'), limit(1));

    const unsubscribe = onSnapshot(limitQuery, (querySnapshot) => {
      console.log("Snapshot is working");
      const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().data), time: parseInt(doc.data().timestamp) }));
      setDecibelLevels(decibelLevels => [...decibelLevels, data[0]]);
      console.log("Decibels in subscribe: ", decibelLevels);

    });

    // Return a function that can be used to unsubscribe from the listener
    return unsubscribe;
  };

  // Use the useEffect hook to fetch the data once when the custom hook is called
  useEffect(() => {
    fetchDecibelLevels();
  }, []);
  // Use the useEffect hook to subscribe to real-time updates when the custom hook is called
  useEffect(() => {
    // Call the subscribe function and store the unsubscribe function
    const unsubscribe = subscribeToDecibelLevels();

    // Return a function that will call the unsubscribe function when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Return the decibelLevels variable and the fetchDecibelLevels function from the custom hook
  return [decibelLevels, fetchDecibelLevels];
}


