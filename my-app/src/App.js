import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./pages/Blogs.js"

import React, { useState, useEffect } from 'react';

function App() {

const [serverJSON, setServerJSON] = useState({message: null})
const urlEndpoint = "http://127.0.0.1:4000"

useEffect(() => {
  const fetchData = async () => {
    const apiResponse = await fetch(`${urlEndpoint}/blogs/hello-blogs`);
    const apiJSON = await apiResponse.json();
    console.log(apiJSON);
    setServerJSON(apiJSON);
    return;
  };
  fetchData();
}, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Routes>

          <Route path="/blogs" element={ <BlogsPage message={serverJSON.message} /> } />
        </Routes>

      </header>
    </div>
  );
}

export default App;
