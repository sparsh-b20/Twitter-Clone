import logo from './logo.svg';
import './App.css';
import React from "react";
import Feed from './Feed';
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="app">
      
      <Sidebar />
      <Feed />

    </div>
  );
}

export default App;
