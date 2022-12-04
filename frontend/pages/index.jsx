import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
 import {useState, useEffect, useRef } from 'react'
 import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";

const getProviderOrSigner = async (needSigner = false) => {
  // Connect to Metamask
  // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);

  // If user is not connected to the Goerli network, let them know and throw an error
  const { chainId } = await web3Provider.getNetwork();
  if (chainId !== 5) {
    window.alert("Change the network to Goerli");
    throw new Error("Change network to Goerli");
  }

  if (needSigner) {
    const signer = web3Provider.getSigner();
    return signer;
  }
  return web3Provider;
};

function connectWallet(){
  console.log('attempting metamask connection')
} 
export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();
  const router = useRouter()
  return (
    <main className='h-screen grid place-content-center'>
      <div className='text-5xl'>Welconme to Knowmyrecords</div>
      
      <div
      className="bg-orange-500 hover:bg-orange-700 w-24 text-white font-bold py-2 px-4 rounded m-5"
      onClick={ connectWallet }
      >Connect Wallet</div>
      <div className='bg-slate-50 flex justify-center'>
      <div
      className="bg-green-500 hover:bg-green-700 w-32 text-white font-bold py-2 px-4 rounded m-5"
      onClick={() => router.push('/Dashboard') }
      >Authenticate Pending Requests</div>
      </div>
      
    </main>
  )
}
