import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Quill from 'quill';

const AddJob = () => {

    const [title,setTitle] = useState('');
    const [location,setLocation] = useState('Bangalore');
    const [category,setCategory] = useState('Programming');
    const [level,setLevel] = useState('Beginner Level');
    const [salary,setSalary] = useState(0);

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
  if (editorRef.current) {
    quillRef.current = new Quill(editorRef.current, {
      theme: 'snow',
      placeholder: 'Write job description here...',
    });
  }
}, []);



  return (
    <form>
      
      <div>
        <p>Job Title</p>
        <input type="text" placeholder='Type here' 
        onChange={e=>setTitle(e.target.value)} value={title} required/>
      </div>
      <div>
        <p>Job Description</p>
        <div ref={editorRef}>

        </div>
      </div>
    </form>
  )
}

export default AddJob
