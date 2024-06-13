import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ blogs }) => {
  return (
    <>
    
   <div id='find' className="banner">
      <img src="img/newsletter-bg.png" alt="" />
      <div className="banner-txt-2">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <h2>SIGN UP NOW AND GET 75% OFF</h2>
        <button>SIGN UP NOW</button>
      </div>
    </div>
    <div className="section-5">
      <div className="headings">
        <h1>OUR BLOGS & NEWS</h1>
      </div>
      <div className="photo-section">
        <div>
          {blogs.map((blog, index) => (
            <div className="photo-sub-section" key={index}>
              <img className="image span-1" src={blog.image} alt={blog.alt} />
              <div className="photo-sub-section-txt-2">
                <h1>{blog.title}</h1>
                <h2>{blog.date} by {blog.author}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
</>

  );
};

export default Div4;
