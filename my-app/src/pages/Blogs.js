import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

import './Blogs.css';


const BlogsPage = (props) => {
    return (
        <div className="blogs-page">

            <h2 style = {{textAlign:'center'}}>Blogs</h2>
            <div id='blogs-header'>
                Select:{" "}
                <select
                    defaultValue={props.sortField}
                    onChange={(e) => {
                    const value = e.target.value;
                    props.setSortField(value);
                    }}
                >
                    <option value=""></option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="createdAt">Generated</option>
                </select>{" "}
                SortOrder:{" "}
                <select
                    defaultValue={props.sortOrder}
                    onChange={(e) => {
                    const value = e.target.value;
                    props.setSortOrder(value);
                    }}
                >
                    <option value="ASC">Ascend</option>
                    <option value="DESC">Descend</option>
                </select>{" "}
                Filter Field:{" "}
                <select 
                defaultValue={props.filterField}
                onChange={(e)=> {
                    const value = e.target.value;
                    props.setFilterField(value)
                }}
                >
                    <option value=""></option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>
                <br></br>
                Filter Value:{" "}
                <input
                    type="text"
                    value={props.filterValue}
                    onChange={(e) => {
                    const value = e.target.value;
                    props.setFilterValue(value);
                    }}
                ></input>{" "}
                Limit:{" "}
                <input
                    type="number"
                    value={props.limit}
                    onChange={(e) => {
                    const value = e.target.value;
                    props.setLimit(value);
                    }}
                ></input>{" "}
                Page:{" "}
                <input
                    value={props.page}
                    onChange={(e) => {
                    const value = e.target.value;
                    props.setPage(value);
                    }}
                ></input>
            
            </div>

          {props.message.map((blog, index) => {
            return (
              <div
                key={`${blog}-${index}`}
                style={{
                  display: "flex",
                  flexDirection:'column',
                  padding: '2em'
                }}
              >
                <br/>Title : {blog.title.toUpperCase()}
                <br/>Author : {blog.author}
                <br/>
                <br/>Text: {blog.text}
                <br/>
                <br/>{blog.createdAt}
                <br/>
                <br/><div style={{borderBottom:'1px white solid'}}></div>
              </div>
            );
          })}
        
      </div>
  
    )
  }
export default BlogsPage;
