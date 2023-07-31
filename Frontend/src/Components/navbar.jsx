import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Blog Writers</div>
        <div className="navbar-buttons">
          <Link to="Create"><button className="create-blog-button">Create Blog</button></Link>
          <Link to="View"><button className="view-blogs-button">View Blogs</button></Link>
        </div>
      </nav>
    </div>
  )
}
