/*eslint-disable */
import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { listProducts, getPost } from '../graphql/queries'


export default function GetPostImgStack() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  async function fetchData() {
    const apiData = await API.graphql({
      query: listProducts
    })
    const { items } = apiData.data.listProducts
    // Fetch images from S3 for posts that contain a cover image
    const withImg = await Promise.all(items.map(async item => {
      if (item.coverImage) {
        item.coverImage = await Storage.get(item.coverImage)
      }
      return item
    }))
    setData(withImg)
  }
  return (
    <div className="absolute flex flex-fow flex-wrap top-0.5 w-full h-1/3 z-0">
      {
      data.map((item, index) => (
        <img className="h-1/4 w-1/10 object-cover duration-350" src={item.coverImage} alt="" />
      ))
    }  
    </div>
  )
}


