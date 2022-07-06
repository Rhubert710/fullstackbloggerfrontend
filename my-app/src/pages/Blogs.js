import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';


function BlogsPage (props)
{
    return (
        <div className="blogs-page">
        <h1>Blogs Page</h1>
        <p>Server Message: {props.message}</p>
        </div>
    )
}
export default BlogsPage;
