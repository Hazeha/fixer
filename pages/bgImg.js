import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { listPosts, getPost } from '../graphql/queries'


export default function GetPostImgStack() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts
    })
    const { items } = postData.data.listPosts
    // Fetch images from S3 for posts that contain a cover image
    const postsWithImages = await Promise.all(items.map(async post => {
      if (post.coverImage) {
        post.coverImage = await Storage.get(post.coverImage)
      }
      return post
    }))
    setPosts(postsWithImages)
  }
  return (
    <div className="absolute flex flex-fow flex-wrap top-0.5 w-full h-1/3 z-0">
      {
      posts.map((post, index) => (
        <img className="h-1/4 w-1/10 object-cover duration-350" src={post.coverImage} alt="" />
      ))
    }  
    </div>
      
    
  )
}


