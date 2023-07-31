import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState,useRef } from 'react';
import Navbar from './navbar'

export default function Create(props) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link'],
      [{ align: [] }],
      ['image'],
      ['clean'],
      [{ color: [] }],
      [{ background: [] }],
      ['blockquote'],
      ['code-block'],
      ['video'],
      [{ font: [] }],
    ],
  };
  
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'bullet',
    'link',
    'image',
    'color',
    'background',
    'blockquote',
    'code-block',
    'video',
    'font',
  ];
  
  const [blogName, setBlogName] = useState(""); 
  const [text, setText] = useState("");
  const quillref = useRef(null);

  const handleCompleted = async () => {
  if (quillref.current.value !== "") {
    const editor = quillref.current.getEditor();
    const content = editor.root.innerHTML;
    setText(content);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blog: content, name: blogName }),
    };
    
    try {
      const response = await fetch('https://dolomite-lace-skull.glitch.me/Blogs', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      alert('Uploaded Successfully');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  } else {
    alert('Cannot submit empty blog');
  }
};

  return (
    <center>
        {/* Navbar */}
        <Navbar/>

        {/* Blog name */}
        <input
          className='Name'
          name='name'
          type="text"
          valueofname={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          placeholder="Enter Blog Name"
        />

        <form action={`https://dolomite-lace-skull.glitch.me/Blogs?blog=${text}&name=${blogName}`} method="post" encType='multipart/form-data'>
          {/* Quill Box */}
          <div name='blog' type='text' label='blog' id='blog'style={{ width: '95%', marginTop: '25px', marginBottom: '45px', border: '5px solid #111042', borderRadius:'10px', backgroundColor: 'white'}}>
                <ReactQuill ref={quillref} value={text} modules={modules} formats={formats} theme="snow" style={{ height: '350px' }}/>
            </div>

          {/* Buttons */}
          <div>
              <button onClick={handleCompleted} className="completed-button">
                  Upload Blog
              </button>
          </div>
          
          {/* Data Saved */}
          <div>
              <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </form>

        {/* Footer */}
        <footer className="footer-create">
            <div className="footer-text">&copy; 2023 Blog Writers</div>
        </footer>
    </center>
  );
}