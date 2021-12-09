import 'tailwindcss/tailwind.css'
import '../configureAmplify'
import Link from 'next/Link'
import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import NavInfo from '../src/components/NavInfo'
import Header from './ui/header'

function MyApp({ Component, pageProps }) {
  const [signedInUser, setSignedInUser] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    authListener()
  })
  async function authListener() {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          return setSignedInUser(true)
        case 'signOut':
          return setSignedInUser(false)
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setSignedInUser(true)
    } catch (err) {}
  }
  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans">
      
      <NavInfo auth={signedInUser} />
      <Header />
      <nav className="items-center justify-end bg-transparent">
        <div className="sm:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </nav>
      { navOpen && 
          <div className="text-sm flex lg:flex-grow flex-col text-center ">
            <Link href="/">
              <span className="mr-6 cursor-pointer my-3 py-3 font-semibold text-2xl">Home</span>
            </Link>
            <Link href="/create-post">
              <span className="mr-6 cursor-pointer my-3 py-3 font-semibold text-2xl">Create Post</span>
            </Link>
            <Link href="/profile">
              <span className="mr-6 cursor-pointer my-3 py-3 font-semibold text-2xl">Profile</span>
            </Link>
          </div>
        }
        
      <div className="" >
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
