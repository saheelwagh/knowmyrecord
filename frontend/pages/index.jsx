import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div>Welconme to Knowmyrecords</div>
      <div>View More</div>
      <div
      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
      onClick={() => {
        
      }}
      >Authenticate Pending Requests</div>
    </main>
  )
}
