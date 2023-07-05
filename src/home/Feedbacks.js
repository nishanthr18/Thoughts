import React, { useState, useEffect } from "react";

const url = `https://comman-server.onrender.com/todos`;

const Feedbacks = () => {
  const [stateObj, setStateObj] = useState({});
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const getAllFeedbacks = () => {
    return fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => (setAllData(result.todos), processData(result.todos)));
  };

  const processData = (data) => {
    let tempObj = {};
    let tempArray = [];

    for (let i = 0; i < data.length; i++) {
      tempObj[data[i]["_id"]] = data[i];
      tempArray.push(data[i]["_id"]);
    }
    setStateObj(tempObj);
  };

  return <div style={{ color: "white" }}>Feedbacks</div>;
};

export default Feedbacks;
