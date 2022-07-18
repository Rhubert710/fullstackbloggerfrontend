import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import './PostBlogPage.css';

const PostBlogPage = ({ blogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [resMssg, setResMssg] = useState("");
  const navigate = useNavigate();

  return (
    <div id="postPage">

      <h2> Create New Blog Post</h2>

      <div id="postBody">

        <div id="col1">
            <div>Title</div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                    const newTitle = e.target.value;
                    setTitle(newTitle);
                    }}
                ></input><br/><br/>

                <div>Text</div>
                <textarea
                    type="text"
                    value={text}
                    style = {{width:'100%', height:'19vmin'}}
                    onChange={(e) => {
                    const newText = e.target.value;
                    setText(newText);
                    }}
                ></textarea>
        </div>

        {/* column2 */}
        <div id="col2">
            <div>Author</div>
            <input
                type="text"
                value={author}
                onChange={(e) => {
                const newAuthor = e.target.value;
                setAuthor(newAuthor);
                }}
            ></input><br/><br/>

            <div>Category</div>
            <input
                type="text"
                value={category}
                onChange={(e) => {
                const newCategory = e.target.value;
                setCategory(newCategory);
                }}
            ></input><br/><br/>
            
            <button
                onClick={async () => {
                    const { success, message } = await blogSubmit({
                    title: title,
                    author: author,
                    category: category,
                    text: text,
                    });
                    setResMssg(message);
                    if (success === true) {
                    navigate("/blogs");
                    }
                }}
                
            >
                Submit
            </button>
            <div>{resMssg}</div>
        </div>

      </div>
    </div>
  );
};

export default PostBlogPage;