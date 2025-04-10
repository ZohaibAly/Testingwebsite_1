import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div className="Blog">
            <div className='Blog-text'>
                <h2>Blogs Are Coming Soon!</h2>
            </div>
            <div className="Blog-btn">
                <a href="#">
                    <Link to="/contact"><button className='blog-btn'>Contact Us</button></Link>
                </a>
            </div>
        </div>
    );
}

export default Blog;
