import React, { useEffect, useState } from 'react'
import Link from 'next/link'


export default function EditTopicForm(props) {
  const [post, setPost] = useState([]);
  const [newtitle, setNewtitle] = useState('')
  const [newdesc, setNewdesc] = useState('')

  console.log("Yahoo PostID : ",props.postId)

  useEffect(() => {
    fetch(`http://localhost:3000/api/post/route/?id=${props.postId}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data[0]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = newtitle.trim()
    const description = newdesc.trim()
    const postObject = {
      title: title,
      description: description
    }

    console.log(postObject);

    if (title && description) {
      fetch(`http://localhost:3000/api/post/route/${props.postId}`, {
        method: "PUT",
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
    <div className='border-2 border-slate-500 w-80 placeCenter p-4'>
      <form className='flex flex-col gap-3 p-4' onSubmit={handleUpdate}>
        <h1 className='text-2xl'>Edit Post</h1>
        <h2>Post Title</h2>
        <input type='text' className='border-slate-500 h-10' value={post.title} onChange={(e) => setNewtitle(e.target.value)} />
        <h2>Post Description</h2>
        <input type='text' className='border-slate-500 h-10' value={post.description} onChange={(e) => setNewdesc(e.target.value)} />
        <input type="submit" className='bg-blue-500 text-white p-2' vaue="Update Post" />
        <Link href='/' className='bg-orange-300 text-slate-100 text-center p-2'>
          <button >Go Back</button>
        </Link>
      </form>
    </div>
  )
}
