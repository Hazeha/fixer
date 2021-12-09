import { withAuthenticator } from '@aws-amplify/ui-react'
import { useState, useRef } from 'react' // new
import { API, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createPost } from '../graphql/mutations'

const initialState = { title: '', content: '' }

function CreatePost() {
  const [post, setPost] = useState(initialState)
  const [image, setImage] = useState(null)
  const hiddenFileInput = useRef(null);
  const { title, content } = post
  const router = useRouter()
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }))
  }
  async function createNewPost() {
    if (!title || !content) return
    const id = uuid() 
    post.id = id
    // If there is an image uploaded, store it in S3 and add it to the post metadata
    if (image) {
      const fileName = `${image.name}_${uuid()}`
      post.coverImage = fileName
      await Storage.put(fileName, image)
    }

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push(`/posts/${id}`)
  }
  async function uploadImage() {
    hiddenFileInput.current.click();
  }
  function handleChange (e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return
    setImage(fileUploaded)
  }
  return (
    <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10
          py-8 rounded-3xl w-50 max-w-md">
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Nyt Opslag</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Titel"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      /> 
      {
        image && (
          <img src={URL.createObjectURL(image)} className="my-4" />
        )
      }
      <SimpleMDE value={post.content} onChange={value => setPost({ ...post, content: value })} />
      <input
        type="file"
        ref={hiddenFileInput}
        className="absolute w-0 h-0"
        onChange={handleChange}
      />
      <input
        onChange={onChange}
        name="price"
        placeholder="Pris/dag"
        value={post.price}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <input
        onChange={onChange}
        name="discount"
        placeholder="Discount/dag"
        value={post.discount}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      /> 
      <button
        className="bg-white border-2 font-semibold px-8 py-2 rounded-lg mr-2" 
        onClick={uploadImage}        
      >
        Upload Cover Image
      </button>
      <button
        type="button"
        className="mb-4 bg-white font-semibold px-8 py-2 rounded-lg border-2"
        onClick={createNewPost}
      >Create Post</button>
    </div>
  )
}

export default withAuthenticator(CreatePost)
 /**
  * 
  * 
id: ID!
name: String!
discription: String
category: String
priceDay: Float
priceWeek: Float
rating: Int
comments: [Comment] @connection(keyName: "productIDIndex", fields: ["id"])
username: String
createdAt: String
baseType: String
 */
