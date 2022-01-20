/*eslint-disable */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth, Storage } from 'aws-amplify'
import { productsByUsername } from '../graphql/queries'
import { deleteProduct as deleteProductMutation } from '../graphql/mutations'

export default function MyProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts()
  }, [])
  async function fetchProducts() {
    const { username } = await Auth.currentAuthenticatedUser()
    const productData = await API.graphql({
      query: productsByUsername, variables: { username }
    })
    const items = productData.data.productsByUsername.items
    const postsWithImages = await Promise.all(items.map(async item => {
      if (item.coverImage) {
        item.coverImage = await Storage.get(item.coverImage)
      }
      return item
    }))
    setProducts(postsWithImages)
  }
  async function deleteProduct(id) {
    await API.graphql({
      query: deleteProductMutation,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    fetchProducts()
  }
  
  return (
    <div className="w-full">
      <div className="text-3xl font-semibold tracking-wide mb-2">Dine Produkter</div>
      <p>Antal annoncer: {products.length}</p>
      <div className="flex bg-white h-8 p-1">
        <div className="w-1/5">
          Billede
        </div>
        <div className="w-1/2 border-l border-yellow-300 pl-1">
          Beskrivelse
        </div>
        <div className="w-1/6 border-l border-yellow-300 pl-1">
          Dato
        </div>
        <div className="border-l w-1/12 border-yellow-300 pl-1">
          Pris
        </div>
      </div>
      
      {
        products.map((product, index) => (
          <div key={index} className="border-t py-2 border-yellow-400 ">
            <div  className="flex">
             <img className="inset-0 w-1/5" src={product.coverImage} alt="" />

              <div className="w-1/2 px-2">
                <h1 className="text-xl font-semibold">{product.name}</h1>
                <h2 className="text-sm">{product.discription.substring(0,310)}</h2>
                
              </div>
              <div className="w-1/6 py-1 px-1">
                <p className="text-gray-600">{product.createdAt.substring(0,10)}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-600 py-1">{product.price} kr.</h3>
              </div> 
          </div>
          <div>
            <Link href={`/edit-product/${product.id}`}>
              <a className="text-sm mr-4 text-blue-500">Opdater Produkt</a>
            </Link>
            <Link href={`/products/${product.id}`}>
              <a className="text-sm mr-4 text-blue-500">Se Produkt</a>
            </Link>
            <button className="text-sm mr-4 text-red-500" onClick={() => deleteProduct(product.id)}>
              Slet Produkt
            </button>
          </div>
          
        </div>
        ))
      }
    </div>
  )
}