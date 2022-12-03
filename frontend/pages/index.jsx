import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
 
export default function Home() {
  const router = useRouter()
  return (
    <main className='h-screen grid place-content-center'>
      <div className='text-5xl'>Welconme to Knowmyrecords</div>
      <div className='text-3xl'>View More</div>
      <form action="" className='bg-slate-50 flex justify-center'>
      <div
      className="bg-green-500 hover:bg-green-700 w-32 text-white font-bold py-2 px-4 rounded m-5"
      onClick={() => router.push('/Dashboard') }
      >Authenticate Pending Requests</div>
      </form>
      
    </main>
  )
}
