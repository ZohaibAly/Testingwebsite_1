import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="Blog">
      <div className="Blog-text">
        <h2>Blogs Are Coming Soon!</h2>
      </div>
      <div className="Blog-btn">
        <Link to="/contact-us">
          <button className="blog-btn">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
