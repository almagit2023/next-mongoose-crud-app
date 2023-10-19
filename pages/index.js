import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import PostList from './components/PostList'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='max-w-3xl mx-auto p-4'>
        <Navbar />
        <PostList/>
      </div>
    </main>
  )
}
