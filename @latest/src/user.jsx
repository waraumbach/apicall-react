import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall;
  });

  return;
  <></>;
};

export default User;
