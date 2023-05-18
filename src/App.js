import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";


import { auth } from "./firebase";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
