import React, { useState, useEffect } from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import RemoveButton from './RemoveButton'
import { useRouter } from 'next/router'

const PostList = () => {
  const [post, setPost] = useState([]);
  const router = useRouter()

  useEffect(() => {
    async function fetchPosts() {
      const data = await fetch('http://localhost:3000/api/post/route')
      setPost(await data.json())
    }
    fetchPosts();
  }, [])

  console.log("Posts : ", post.fetchedPosts)
  return (
    <>
      {
        post && post.fetchedPosts && post.fetchedPosts.map(posts =>
          <div className='p-4 border border-slate-300 my-3 flex justify-between items-start'>
            <div>
              <h1 className='font-bold text-2xl'>{posts.title}</h1>
              <div>{posts.description}</div>
            </div>
            <div className='flex gap-2'>
              <RemoveButton postId={posts._id} />
              <button type="button" onClick={() => router.push(`/editPost/${posts._id}`)}>
                <HiPencilAlt size={24} />
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}
export default PostList;
