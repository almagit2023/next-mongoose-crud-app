import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-blue-800 px-8 py-3'>
      <Link className='text-white font-bold text-2xl ' href={'/'}>ALMA BETTER</Link>
      <Link className='bg-white p-2 hover:bg-green-300 hover:cursor-pointer text-slate-950' href={'/addPost'}>Add Posts</Link>
    </nav>
  )
}
