/*eslint-disable */
import { useEffect, useState, useRef } from 'react'
import { API, Storage, Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { updateUser } from '../../src/graphql/mutations'
import * as queries from '../../src/graphql/queries'
import { v4 as uuid } from 'uuid'

//initialState = {profileimage}



export default function ProfileImg({userInfo}) {
    const hiddenFileInput = useRef(null)
    const [image, setImage] = useState(null)
    const [localImage, setLocalImage] = useState(null)


    useEffect(() => {
        loadProfileImage()
      }, [])
    async function loadProfileImage() {
        if (userInfo.profileimage) {
          const imageKey = await Storage.get(userInfo.profileimage)
          setImage(imageKey)
        }
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
            variables: { input: userUpdated },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        console.log("Uploaded")
    }

    
    return(
        <>
            <button className="relative w-2/3 h-48 cursor-pointer" onClick={UpdateProfileImage}>
                <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-40 duration-300">
                    <div className="mx-auto">
                    <div className=" text-gray-800 font-semibold mt-1 py-1 px-4 w-full cursor-pointer">Skift Billede</div>
                    </div>
                </div>
                <div className="h-full flex flex-wrap content-center">
                {
                    image && <img src={localImage ? localImage : image} className="mt-4" alt=""/>
                }
                    <img className="inset-0 w-full hover:opacity-30 block h-auto ease-in-out" src={image} alt="" />
                </div>
            </button>
            <input type="file" ref={hiddenFileInput} className="absolute w-0 h-0" onChange={handleChange} />
        </>
          
    )
}