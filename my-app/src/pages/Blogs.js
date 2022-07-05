import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React, { useState } from 'react';


const BlogsPage = (props) => 
{
    return (
        <div className="blogs-page">
        <h1>Blogs Page</h1>
        <p>Server Message: {props.message}</p>
        </div>
    )
}
export default BlogsPage;
