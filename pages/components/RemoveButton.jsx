import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveButton(props) {

  const handleDelete = (e) => {
    const id = props.postId
    fetch(`http://localhost:3000/api/post/route?id=${id}`, { method: 'DELETE' })
      .then(() => this.setState({ status: 'Delete successful' }));
      window.location.replace("http://localhost:3000/")
  }

  return (
    <button className='text-red-400' onClick={handleDelete}>
      <HiOutlineTrash size={24} />
    </button>
  )
}
