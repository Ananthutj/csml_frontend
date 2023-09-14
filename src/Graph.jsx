import React, { useEffect, useState } from 'react';
import {dbWater} from './firebase.config';
import { collection, getDocs, onSnapshot, query, orderBy} from 'firebase/firestore';
import './graph.css';
import Chart from './components/chart';

export default function Graph() {
  const [loading, setLoading] = useState(true);

  // Define your Firestore collection and document path here
  const collectionPath = 'noise'; // Replace with your collection name
  const documentId = 'dataByID'; // Replace with the specific document ID
  const subcollectionPath = 'cBPtGd6rxSRKJ9YpJNpxH7GvJhj1'; // Replace with your subcollection name

  // Create a reference to the subcollection within the document
  const decibelLevelsRef = collection(dbWater, `${collectionPath}/${documentId}/${subcollectionPath}`);
  const levelQuery = query(decibelLevelsRef, orderBy('timestamp', 'asc'), );

  const [decibelLevels, setData] = useState([{ level: 0, time: 0 }]);

  const fetchDecibelLevels = async () => {
      await getDocs(levelQuery).then((querySnapshot) => {
          const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().data), time: parseInt(doc.data().timestamp) }));
          setData(decibelLevels);

          console.log("Decibels: ", data);
      });
  };

  // Define a function to listen for real-time updates
  const subscribeToDecibelLevels = () => {

      const unsubscribe = onSnapshot(levelQuery, (querySnapshot) => {
          console.log("Snapshot is working");
          const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().data), time: parseInt(doc.data().timestamp) }));
          setData(data);
          console.log("Decibels in subscribe: ", decibelLevels);

      });

      // Return a function that can be used to unsubscribe from the listener
      return unsubscribe;
  };

  // Use the useEffect hook to fetch the data once when the component mounts
  useEffect(() => {
      fetchDecibelLevels();
  }, []);
  // Use the useEffect hook to subscribe to real-time updates when the component mounts
  useEffect(() => {
      // Call the subscribe function and store the unsubscribe function
      const unsubscribe = subscribeToDecibelLevels();

      // Return a function that will call the unsubscribe function when the component unmounts
      return () => {
          unsubscribe();
      };
  }, []);

  if (decibelLevels.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Chart data={decibelLevels} />
    </div>
  );
}
