/*eslint-disable */
import { useEffect, useState, useRef } from 'react'
import { API, Storage } from 'aws-amplify'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { updateProduct } from '../../src/graphql/mutations'
import { getProduct } from '../../src/graphql/queries'

function EditProduct() {
  const [product, setProduct] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const [coverImage, setCoverImage] = useState(null)
  const [localImage, setLocalImage] = useState(null)
  const fileInput = useRef(null)

  useEffect(() => {
    fetchPost()
    async function fetchPost() {
      if (!id) return
      const productData = await API.graphql({ query: getProduct, variables: { id }})
      console.log('postData: ', productData)
      setProduct(productData.data.getProduct)
      if (productData.data.getProduct.coverImage) {
        updateCoverImage(productData.data.getProduct.coverImage)
      }
    }
  }, [id])
  if (!product) return null
  
  async function updateCoverImage(coverImage) {
    const imageKey = await Storage.get(coverImage)
    setCoverImage(imageKey)
  }
  async function uploadImage() {
    fileInput.current.click();
  }
  function handleChange (e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return
    setCoverImage(fileUploaded)
    setLocalImage(URL.createObjectURL(fileUploaded))
  }
  function onChange(e) {
    setProduct(() => ({ ...product, [e.target.name]: e.target.value }))
  }
  const { name, discription } = product
  async function updateCurrentProduct() {
    if (!name || !discription) return
    const productUpdated = {
      id, discription, name
    }
    await API.graphql({
      query: updateProduct,
      variables: { input: productUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push('/my-products')
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Rediger Produkt</h1>
      {
        coverImage && <img src={localImage ? localImage : coverImage} className="mt-4" alt=""/>
      }
      <input
        onChange={onChange}
        name="name"
        placeholder="Title"
        value={product.name}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <SimpleMDE value={product.discription} onChange={value => setProduct({ ...product, discription: value })} />
      <input
        onChange={onChange}
        name="price"
        placeholder="Pris/dag"
        value={product.price}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <input
        type="file"
        ref={fileInput}
        className="absolute w-0 h-0"
        onChange={handleChange}
      />
      <button
        className="bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg mr-2" 
        onClick={uploadImage}        
      >
        Upload Cover Image
      </button>
      <button
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={updateCurrentProduct}>Opdater Produkt</button>
    </div>
  )
}

export default EditProduct 