import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";

function App() {
  const fetchApiCall = async () => {
    try {
      const responseCall = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await responseCall.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
}
export default App;
