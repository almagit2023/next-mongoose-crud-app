import React, { useState } from 'react'
import Link from 'next/link'

export default function AddPost() {

  const [newtitle, setNewtitle] = useState('')
  const [newdesc, setNewdesc] = useState('')

  const createPost = (e) => {
    e.preventDefault();
    const title = newtitle.trim()
    const description = newdesc.trim()
    const postObject = {
      title: title,
      description: description
    }

    console.log(postObject);

    if (title && description) {
      fetch("http://localhost:3000/api/post/route", {
        method: "POST",
        body: JSON.stringify(postObject),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    }
    else {
      console.log("Please enter valid data...")
    }

     window.location.replace("http://localhost:3000/");
  }

  return (
    <div className='border-2 border-slate-500 w-80 placeCenter p-4' onSubmit={(e) => createPost(e)}>
      <form className='flex flex-col gap-3 p-4'>
        <h1 className='text-2xl'>Add Posts</h1>
        <h2>Post Title</h2>
        <input type='text' className='border-slate-500 h-10 p-1' placeholder='Add Title' onChange={(e) => setNewtitle(e.target.value)} />
        <h2>Post Description</h2>
        <input type='text' className='border-slate-500 h-10 p-1' placeholder='Add Desc' onChange={(e) => setNewdesc(e.target.value)} />
        <input type='submit' className='bg-blue-500 text-white p-2' value='Add Post' />
        <Link href='/' className='bg-orange-300 text-slate-100 text-center p-2'>
          <button >Go Back</button>
        </Link>
      </form>
    </div>
  )
}
