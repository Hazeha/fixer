/*eslint-disable */
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import MyProducts from '../src/components/my-products';
import * as queries from '../src/graphql/queries'
import { useState, useEffect, useRef } from 'react'
import { API, Auth, Storage, graphqlOperation  } from 'aws-amplify'
import Link from 'next/link'
import { updateUser } from '../src/graphql/mutations'
import { v4 as uuid } from 'uuid'
function Profile({ isPassedToWithAuthenticator, signOut, user }) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }
  const [userInfo, setUser] = useState([])
  const [image, setImage] = useState(null)
  const hiddenFileInput = useRef(null)
  const [localImage, setLocalImage] = useState(null)
  useEffect(() => {
    fetchUser()
  }, [])
  async function fetchUser() {
    const { username } = await Auth.currentAuthenticatedUser()

    const userData = await API.graphql({
      query: queries.getUser, variables: { id: username }
    })
    console.log(userData.data.getUser)
    setUser(userData.data.getUser)
    if (userData.data.getUser.profileimage) {
      const imageKey = await Storage.get(userInfo.profileimage)
      console.log(imageKey)
      setImage(imageKey)
    }
    console.log(userData.data.getUser)
  }
  async function UpdateProfileImage() {
    hiddenFileInput.current.click();
}


async function handleChange (e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return
    setImage(fileUploaded)
    setLocalImage(URL.createObjectURL(fileUploaded))
    
    const fileName = `${fileUploaded.name}_${uuid()}`
    
    userInfo.profileimage = fileName
    await Storage.put(fileName, image)
    setProfileImage()
}
const { id, username, email, firstname, lastname, profileimage, location } = userInfo
async function setProfileImage() {
    const userUpdated = { id, username, email, firstname, lastname, profileimage, location }
    
    await API.graphql({
        query: updateUser,
        variables: { input: userInfo },
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    console.log(userInfo)
}

  return (
    <Authenticator className="my-6">
      {({ signOut, user }) => (
        <div className="w-full flex justify-center">
         
          <div className="my-5 w-3/4 flex">
            <div className="w-3/4 bg-white shadow-md p-1">
              <MyProducts />
            </div>
            <div className="border-gray-500 ml-2 w-1/4 pl-2 bg-white shadow-md p-1 pb-2">
             
            
              <>
                  <button className="relative w-2/3 h-48 cursor-pointer" onClick={UpdateProfileImage}>
                      <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-40 duration-300">
                          <div className="mx-auto">
                          <div className=" text-gray-800 font-semibold mt-1 py-1 px-4 w-full cursor-pointer">Skift Billede</div>
                          </div>
                      </div>
                      <div className="h-full flex flex-wrap content-center">
                      {
                          userInfo.profileimage && <img src={localImage ? localImage : userInfo.profileimage} alt=""/>
                      }
                          <img className="inset-0 w-full hover:opacity-30 block h-auto ease-in-out" src={image} alt="" />
                      </div>
                  </button>
                  <input type="file" ref={hiddenFileInput} className="absolute w-0 h-0" onChange={handleChange} />
              </>
              <div className="mb-5">
                <h1>{userInfo.firstname} {userInfo.lastname}</h1>
                <p>{userInfo.location}</p>
                <p>{userInfo.email}</p>
                <p>Medlem siden: {userInfo.createdAt}</p>
              </div>
              
              
              <Link href="/update-profile" >
              <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-1 px-3 w-full border border-gray-300 rounded shadow">Opdater Profil</button>
              </Link>
              <button className="bg-red-400 hover:bg-red-500 text-gray-800 font-semibold mt-1 py-1 px-4 w-full border border-gray-300 rounded shadow" onClick={signOut}>Log ud</button>
            </div>
            
          </div>
        </div>
        
      )}
    </Authenticator>
  );
}

export default Profile

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}