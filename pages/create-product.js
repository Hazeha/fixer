/*eslint-disable */
import { withAuthenticator } from '@aws-amplify/ui-react'
import { useState, useRef } from 'react'
import { API, Storage } from 'aws-amplify'

import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createProduct } from '../src/graphql/mutations'

const initialState = { name: '', discription: ''}

function CreateProduct() {
  const [product, setProduct] = useState(initialState)
  const { name, discription } = product
  const [image, setImage] = useState(null)
  const hiddenFileInput = useRef(null);
  const router = useRouter()
  function onChange(e) {
    setProduct(() => ({ ...product, [e.target.name]: e.target.value }))
  }
  async function createNewProduct() {
    if (!name || !discription) return
    const id = uuid() 
    product.id = id
    
    if (image) {
      const fileName = `${image.name}_${uuid()}`
      product.coverImage = fileName
      await Storage.put(fileName, image)
    }

    await API.graphql({
      query: createProduct,
      variables: { input: product },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push(`/products/${id}`)
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
    <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl sm:w-full md:w-4/5 lg:w-4/5 mx-auto my-4">
      <h1 className="text-3xl font-semibold tracking-wide mt-6">{product.name ? product.name : 'Nyt Opslag'}</h1>
      <input
        onChange={onChange}
        name="name"
        placeholder="Titel"
        value={product.name}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <input
        onChange={onChange}
        name="category"
        placeholder="Kategori"
        value={product.category}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />  
      <input
        onChange={onChange}
        name="price"
        placeholder="Pris/dag"
        value={product.price}
        type="number"
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <SimpleMDE value={product.discription} onChange={value => setProduct({ ...product, discription: value })} />
      

  <button className="relative w-1/5 mb-3 cursor-pointer" onClick={uploadImage}>
      <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-40 duration-300">
          <div className="mx-auto">
          <div className=" text-gray-800 font-semibold mt-1 py-1 px-4 w-full cursor-pointer">Upload Billede</div>
          </div>
      </div>
      <div className="h-full flex flex-wrap content-center">
      {
            image ? <img src={URL.createObjectURL(image)} className="my-4" alt="product image"/> : 
            <img className="inset-0 w-full hover:opacity-30 block h-auto ease-in-out" src="https://www.glasmontoren.dk/wp-content/uploads/2016/09/ef3-placeholder-image.jpg" alt="" />
        }
      </div>
  </button>
      
      
      <input
        type="file"
        ref={hiddenFileInput}
        className="absolute w-0 h-0"
        onChange={handleChange}
      />
      
      <button
        type="button"
        className="mb-4 bg-white font-semibold px-8 py-2 rounded-lg border-2"
        onClick={createNewProduct}
      >Create Post</button>
    </div>
  )
}

export default withAuthenticator(CreateProduct)
