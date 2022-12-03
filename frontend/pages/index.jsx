import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
 
export default function Home() {
  const router = useRouter()
  return (
    <main>
      <div>Welconme to Knowmyrecords</div>
      <div>View More</div>
      <div
      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
      onClick={() => router.push('/Dashboard') }
      >Authenticate Pending Requests</div>
    </main>
  )
}
