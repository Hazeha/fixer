/*eslint-disable */
import { useEffect, useState, useRef } from 'react'
import { API, Storage, Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { updateUser } from '../src/graphql/mutations'
import * as queries from '../src/graphql/queries'
import { v4 as uuid } from 'uuid'
export default function UpdateProfile() {
  const [userInfo, setUser] = useState(null)

  const router = useRouter()
  
  useEffect(() => {
    fetchUser()
  }, [])
  async function fetchUser() {
    const { username } = await Auth.currentAuthenticatedUser()
    const userData = await API.graphql({
      query: queries.getUser, variables: { id: username }
    })
    
    setUser(userData.data.getUser)
   
  }

  if (!userInfo) return null

  function onChange(e) {
    setUser(() => ({ ...userInfo, [e.target.name]: e.target.value }))
  }
  const { id, username, email, firstname, lastname, location } = userInfo
  async function updateCurrentUser() {
    const userUpdated = { id, username, email, firstname, lastname, location }
    
    await API.graphql({
      query: updateUser,
      variables: { input: userUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push('/profile')
  }

  
  return (
    <div className="w-2/5 mx-auto bg-gray-50 shadow-md px-5 flex flex-col">
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Opdater Profil</h1>
      <p>Fornavn:</p>
      <input
        onChange={onChange}
        name="firstname"
        placeholder="Fornavn"
        value={userInfo.firstname}
        className="border-b pb-2 text-lg my-4 shadow-md focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <p>Efternavn:</p>
      <input
        onChange={onChange}
        name="lastname"
        placeholder="Efternavn"
        value={userInfo.lastname}
        className="border-b pb-2 text-lg my-4 shadow-md focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <p>Adresse:</p>
      <input
        onChange={onChange}
        name="adress"
        placeholder="Adresse"
        value={userInfo.location}
        className="border-b pb-2 text-lg my-4 shadow-md focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <button
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={updateCurrentUser}>Opdater...</button>
    </div>
  )
}

 