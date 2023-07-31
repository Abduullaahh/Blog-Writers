import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './navbar'
import Create from './Create';

export default function BlogViewPage(props)
{
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dolomite-lace-skull.glitch.me/GetData");
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };  

  const handleCloseZoom = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-view-container">
        <Navbar/>
        
        {/* Blogs Grid */}
        <div>
          <h1 className="page-title">Read Blogs</h1>
          <div className="blogs-grid">
              {data.map((blog) => (
              <div key={data.id} className="blog-item" onClick={() => handleBlogClick(blog)}>
                  <h2>{blog.name}</h2>
              </div>
              ))}
          </div>
          {/* Zoom Content */}
          <div className="datashown">
            {selectedBlog && (
              <div className="blog-zoom">
              <div className="blog-zoom-content">
                  <h2>{selectedBlog.name}</h2>
                  <p  dangerouslySetInnerHTML={{__html:selectedBlog.content}}></p>
                  <button onClick={handleCloseZoom}>Close</button>
              </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-view">
            <div className="footer-text">&copy; 2023 Blog Writers</div>
        </footer>
    </div>
  );
};