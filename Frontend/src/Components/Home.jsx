import React from 'react'
import Navbar from './navbar'

export default function Home() {
  return (
    <div className='main'>
      {/* Navbar */}
      <Navbar/>

      {/* Intro */}
      <div className='intro'>
        <h1 className='head'>Blog Writers</h1>
        <intro className= 'text'>
          Welcome to Blog Writers - a platform for passionate writers to 
          share their thoughts and stories with the world. Whether you're 
          a seasoned blogger or a beginner, our user-friendly interface 
          and rich text editor make creating captivating blogs a breeze. 
          Express yourself, connect with like-minded individuals, and engage
          with a community of writers. Start your journey as a Blog Writer 
          today and let your creativity shine!
        </intro>
      </div>

      {/* Footer */}
      <footer className="footer-home">
        <div className="footer-text">&copy; 2023 Blog Writers</div>
      </footer>
    </div>
  )
}
