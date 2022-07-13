import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./pages/Blogs.js"
import NavBar from "./components/NavBar"
import PostBlogPage from "./pages/PostBlogPage";
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
const [isFetching, setIsFetching] = useState(false);

const blogSubmit = async (blog) => {
  setIsFetching(true);
  const url = `${urlEndpoint}/blogs/blog-submit`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  const responseJSON = await response.json();
  setIsFetching(false);
  return responseJSON;
};


useEffect(() => {
  const fetchData = async () => {
    const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
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
        <div style={{position:'sticky', top:'0px', backgroundColor:'inherit'}}>
          <div id='title'>
            <img src={logo} className="App-logo" alt="logo" />
            <span style={{fontSize:'10vmin'}}>Blooger Frontend</span>
          </div>
          <NavBar />
        </div>

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

          <Route
            path="/Create-Blog"
            element={<PostBlogPage blogSubmit={blogSubmit} />}
          />

        </Routes>

      </header>
    </div>
  );
}

export default App;
