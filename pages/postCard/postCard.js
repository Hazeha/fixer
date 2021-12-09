import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { listPosts, getPost } from '../../graphql/queries'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { GiSandsOfTime } from 'react-icons/gi'
import { MdFreeCancellation } from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

export default function GetPostCard() {
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
  async function name(params) { 
    
  }
  return (
    <div className="container mx-auto">
      
    <h1 className="text-3xl font-light">Nylige opdaterede opslag</h1>
    <div className="flex flex-wrap mx-4">
      {
      posts.map((post, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative pb-72 overflow-hidden">
              <img className="absolute inset-0 h-full w-full object-cover" src={post.coverImage} alt="" />
              <div className="absolute pb-1 pl-1 bottom-0 bg-gradient-to-t from-gray-600 h-1/4 w-full">
                <div className="absolute bottom-0 pb-3 pl-3 ">
                  &nbsp;<span className="text-white font-bold text-xl">{post.price} - {post.discount}</span>
                  &nbsp;<span className="text-white text-xl font-semibold">kr/dag</span>
                </div>
                <span className="flex items-center absolute bottom-0 right-0 pb-3 pr-3">
                  <CgProfile size="19pt" className="" /> 
                </span>
              </div>
            </div>
            <div className="px-1 flex flex-row justify-between">
              <div>
                <h2 className="mt-1 mb-1  font-bold">{post.title}</h2>
              <p className="text-sm font-light">{`${post.content.substring(0, 40)}...`}</p>
              </div>
              
              
              
            
              <span className="flex items-center">
                <RiSecurePaymentLine size="19pt" className="text-green-700 mr-2" />
                <GiSandsOfTime size="19pt" className="text-green-700 mr-2" />
                <MdFreeCancellation size="19pt" className="text-green-700 mr-2" />
              </span>        
            </div>
            
          </div>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts
  })
  const paths = postData.data.listPosts.items.map(post => ({ params: { id: post.id }}))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params
  const postData = await API.graphql({
    query: getPost, variables: { id }
  })
  return {
    props: {
      post: postData.data.getPost
    }
  }
}