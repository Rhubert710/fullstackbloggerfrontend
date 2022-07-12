import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./pages/Blogs.js"

import React, { useState, useEffect } from 'react';

function App() {

const [serverJSON, setServerJSON] = useState([]);
const urlEndpoint = "http://127.0.0.1:4000";

const [sortField, setSortField] = useState("");
const [sortOrder, setSortOrder] = useState("ASC");
const [filterField, setFilterField] = useState("");
const [filterValue, setFilterValue] = useState("");
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(0);


useEffect(() => {
  const fetchData = async () => {
    const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`
    const apiResponse = await fetch(url);
    const apiJSON = await apiResponse.json();
    setServerJSON(apiJSON);
    return;
  };
  fetchData();
}, [sortField, sortOrder, filterField, filterValue, limit, page]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Routes>

          <Route path="/blogs" element={ <BlogsPage 
          
            message={serverJSON} 
            
            sortField={sortField}
            setSortField={setSortField}

            sortOrder={sortOrder}
            setSortOrder={setSortOrder}

            filterField={filterField}
            setFilterField={setFilterField}

            filterValue={filterValue}
            setFilterValue={setFilterValue}

            limit={limit}
            setLimit={setLimit}

            page={page}
            setPage={setPage}
            /> 
            } />
        </Routes>

      </header>
    </div>
  );
}

export default App;
