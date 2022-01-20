/*eslint-disable */
import {FiMenu} from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import Link from 'next/link'
import Breadcrumbs from 'nextjs-breadcrumbs';


export default function Header() {
  const [userInfo, setUser] = useState(null)
  useEffect(() => {
    fetchUser()
  }, [])
  async function fetchUser() {
    const { username } = await Auth.currentAuthenticatedUser()
    setUser(username)
  }

  const NavLink = ({url, title, logo}) => (
    <Link className="" href={url}>
      <div className="justify-center text-center w-2/6 cursor-default">
        <div className="shadow-lg cursor-pointer border-yellow-400  hover:border-gray-700 border-2 w-14 h-14 rounded-full font-medium text-gray-700 hover:text-yellow-400 transition duration-200 each-in-out mx-auto items-center justify-center flex">
          {logo}
        </div>
        <p className="curser-default">{title}</p>
      </div> 
    </Link>
  )

  return(
    <header className="border-gray-500 shadow-lg bg-white mb-4">
      <div className="flex flex-row justify-center py-5 px-3 h-1/3 gap-3 w-4/5 mx-auto">
        <Link href="/">
          <div className="text-center w-5/12 flex flex-row">
            
              <h1 className="text-6xl font-bold cursor-pointer">Hyr</h1><h1 className="text-4xl font-bold text-yellow-400 cursor-pointer">dk</h1>
            
          </div>
        </Link>    
        <div className="z-10 w-full h-1/3">
          
        </div>
        <div className="w-5/12 flex flex-row justify-around mt-4">
          <Link href="/profile">
            <button className="my-auto w-40 border px-3 py-1 rounded ml-auto bg-gray-100 hover:bg-gray-200 h-12 mr-3 text-gray-700 font-semibold">{!userInfo ? 'Tilmeld / Login' : 'Profil' }</button>
          </Link>
          <Link href="/create-product">
            <button className="my-auto w-40 border px-3 py-1 rounded ml-auto bg-yellow-400 hover:bg-yellow-500 h-12 mr-3 text-gray-700 font-semibold">Opret Udlejning</button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-200 shadow">
        <div className="flex  h-16 w-4/5 mx-auto">
        <Link href="/products">
          <button className="my-auto hover:bg-yellow-400 transition duration-200 ease-in-out px-5">
            <div className="h-16 flex flex-row justify-center items-center">
              <FiMenu size="21pt"/> 
              <p className="font-semibold ml-2">Alle produkter</p>
            </div>
          </button>
        </Link>
        <Link href="/">
          <button className="my-auto w-36 h-16 hover:bg-yellow-400 transition duration-200 ease-in-out">Nye Opslag</button>
        </Link>
        <Link href="/profile">
          <button className="my-auto w-36 h-16 hover:bg-yellow-400 transition duration-200 ease-in-out">Dine Opslag</button>
        </Link>
        </div>
      </div>
    </header>
  )
}