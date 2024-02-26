import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState();

  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall();
    console.log(data);
  });

  return;
  <></>;
};

export default User;
