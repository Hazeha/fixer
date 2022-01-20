/*eslint-disable */
import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { listProducts } from '../graphql/queries'

import { RiSecurePaymentLine } from 'react-icons/ri'
import { GiSandsOfTime } from 'react-icons/gi'
import { MdFreeCancellation } from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

export default function GetRecentProducts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchProducts()
  }, [])
  async function fetchProducts() {
    const postData = await API.graphql({
      query: listProducts
    })
    const { items } = postData.data.listProducts
    // Fetch images from S3 for posts that contain a cover image
    const postsWithImages = await Promise.all(items.map(async item => {
      if (item.coverImage) {
        item.coverImage = await Storage.get(item.coverImage)
      }
      return item
    }))
    setPosts(postsWithImages.slice(0,6))
  }
  
  return (
    <div className="container mx-auto">
      
    <h1 className="text-3xl font-light">Nylige opdaterede opslag</h1>
    <div className="flex flex-wrap mx-4">
    
      {
      posts.map((item, index) => (
        <Link key={index} href={`/products/${item.id}`}>
        <div key={index} href={`/products/${item.id}`} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 cursor-pointer">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative pb-72 overflow-hidden">
              <img className="absolute inset-0 h-full w-full object-cover" src={item.coverImage} alt="" />
              <div className="absolute pb-1 pl-1 bottom-0 bg-gradient-to-t from-gray-600 h-1/4 w-full">
                <div className="absolute bottom-0 pb-3 pl-3 ">
                  &nbsp;<span className="text-white font-bold text-xl">{item.price}</span>
                  &nbsp;<span className="text-white text-xl font-semibold">kr/dag</span>
                </div>
                <span className="flex items-center absolute bottom-0 right-0 pb-3 pr-3">
                  <CgProfile size="19pt" className="" /> 
                </span>
              </div>
            </div>
            <div className="px-1 flex flex-row justify-between">
              <div>
                <h2 className="mt-1 mb-1  font-bold">{item.name}</h2>
              <p className="text-sm font-light">{`${item.discription.substring(0, 40)}...`}</p>
              </div>

              <span className="flex items-center">
                <RiSecurePaymentLine size="19pt" className="text-green-700 mr-2" />
                <GiSandsOfTime size="19pt" className="text-green-700 mr-2" />
                <MdFreeCancellation size="19pt" className="text-green-700 mr-2" />
              </span>        
            </div>
            
          </div>
          </div>
        </Link>
      ))
    }
    </div>
    <div  className="w-full flex justify-center mt-2">
      <Link href="/products" >
        <button className="border-yellow-400 border-2 rounded py-2 px-7 mr-2 mb-2 cursor-pointer hover:bg-yellow-400">
          Se alle produkter
        </button>
      </Link>
    </div>
    
    </div>
  )
}
