import React, { useState, useEffect } from "react";
import axios from "axios";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";

const Graph = () => {
  const [data, setData] = useState([]);
  
  // Function to format the date from "2023-09-13T20:30:20Z" to "YYYY-MM-DD hh:mm:ss a"
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const amPm = date.getHours() >= 12 ? "PM" : "AM";
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${amPm}`;
  };

  const fetchData = () => {
    axios
      .get(`https://api.thingspeak.com/channels/2263558/feeds.json?results=10`)
      .then((response) => {
        if (response.data.feeds) {
          // Format the date and time before setting the data
          const formattedData = response.data.feeds.map((feed) => ({
            ...feed,
            created_at: formatDateTime(feed.created_at),
          }));
          setData(formattedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from ThingSpeak:", error);
      });
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
    <AreaChart title="Temperature Chart" width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        style={{
          position: "absolute",
          right: 250,
          top: 250,
        }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis  name="Mosquito" title="Date" />
        <YAxis name="Temperature" title="Temperature" />
        <Tooltip />
        <Area type="monotone" dataKey="field1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  );
};

export default Graph;