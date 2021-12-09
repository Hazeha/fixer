import { useState, useEffect } from 'react'
import GetPostCard from './postCard/postCard'
import GetPostImgStack from './bgImg'
import {RiSearch2Line, RiShieldCheckFill} from 'react-icons/ri'
import {BiMapPin, BiCycling, BiLike, BiHappyAlt} from 'react-icons/bi'
import {BsCalendarDate, BsPerson, BsHeadset} from 'react-icons/bs'
import {GiShatteredGlass, GiGardeningShears, GiPiggyBank} from 'react-icons/gi'
import {FiMenu} from 'react-icons/fi'


import {MdOutlineAlarmOn} from 'react-icons/md'
import Link from 'next/Link'
import Image from 'next/image'
import { API, Storage } from 'aws-amplify'
import { listPosts, getPost } from '../graphql/queries'
import Header from './ui/header'


export default function Browse() {
  const GetCategories = () => {
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
  }


  return(
    <div>
     

    <div className="w-full sm:w-10-12 mx-auto bg-white border border-gray-300 flex gap-3">
      <div className="bg-white w-full gap-3 flex flex-col">

        <div className="w-full h-64 bg-red-300 justify-center items-center flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Lej istedet for at købe</h1>
          <h2 className="text-2xl font-semibold">I nærheden og til tider der passer dig</h2>
        </div>
      <div className="flex flex-row gap-3 justify-center">
        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>

        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>

        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>

        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>
        
        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>

        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>

        <div className="border border-gray-200 w-28 h-28 bg-white hover:bg-gray-900 text-gray-900 hover:text-gray-50 flex flex-col justify-center items-center">
          <GiGardeningShears size="34pt" />
          <p className="text-lg font-semibold">Have</p>
        </div>
      </div>
      <section>
        <div className="w-full bg-yellow-400 text-gray-900 flex justify-center text-2xl font-semi py-2"><h2>Nyeste opslag</h2></div>
        {
          GetPostCard()
        }
        </section>
    <section>
      <div className="pt-3 container mx-auto pb-6 mb-6">
        <h1 className="text-3xl font-light">Sådan fungere Fixer</h1>
        <div className="flex flex-row justify-around">
        <article className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-36 lg:h-48 bg-gray-500 overflow-hidden flex justify-center items-center">
            <GiPiggyBank size="82pt" fill="white" className="w-1/2 h-1/2"  />
            </div>
            <div className="flex flex-col text-center lg:px-12 lg:py-10 py-3 px-3">
                <h2 className="mb-2 font-bold">Billigere end køb</h2>
                <p className="text-sm font-light">Så både udlejer eller lejer er sikret</p>
            </div>
          </div>
        </article>
        <article className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-36 lg:h-48 bg-gray-500 overflow-hidden flex justify-center items-center">
            <BiCycling size="82pt" fill="white" className="w-1/2 h-1/2"  />
            </div>
            <div className="flex flex-col text-center lg:px-12 lg:py-10 py-3 px-3">
                <h2 className="mb-2 font-bold">Lej i dit område!</h2>
                <p className="text-sm font-light">Alle udlejer og lejere skal verificeres med nem-id</p>
            </div>
          </div>
        </article>

        <article className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-36 lg:h-48 bg-gray-500 overflow-hidden flex justify-center items-center">
            <BiHappyAlt size="82pt" fill="white" className="w-1/2 h-1/2"  />
            </div>
            <div className="flex flex-col text-center lg:px-12 lg:py-10 py-3 px-3">
                <h2 className="mb-2 font-bold">Tider der passer!</h2>
                <p className="text-sm font-light">Support er altid på arbejde, og sikre dig den </p>
            </div>
          </div>
        </article>

        <article className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-36 lg:h-48 bg-gray-500 overflow-hidden flex justify-center items-center">
            <BiLike fill="white" className="w-1/2 h-1/2" />
            </div>
            <div className="flex flex-col text-center lg:px-12 lg:py-10 py-3 px-3">
                <h2 className="mb-2 font-bold">Godt for miljøet!</h2>
                <p className="text-sm font-light">De fleste udlejere svare indenfor 30 minutter</p>
            </div>
          </div>
        </article>
        </div>
        <div className="flex flex-row flex-wrap justify-around">

        <article className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/12 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-40 sm:h-48 bg-green-400 overflow-hidden flex justify-center items-center">
            <GiShatteredGlass size="82pt" className="text-gray-100" />
            </div>
            <div className="flex flex-col text-center px-6 sm:px-12 py-4 sm:py-10">
                <h2 className="mb-2 font-bold">Alle er forsikret</h2>
                <p className="text-sm font-light">Så både udlejer eller lejer er sikret</p>
            </div>
          </div>
        </article>
        <article className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/12 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-40 sm:h-48 bg-blue-400 overflow-hidden flex justify-center items-center">
            <RiShieldCheckFill size="82pt" className="text-gray-100" />
            </div>
            <div className="flex flex-col text-center px-6 sm:px-12 py-4 sm:py-10">
                <h2 className="mb-2 font-bold">Alle er verificeret</h2>
                <p className="text-sm font-light">Alle udlejer og lejere skal verificeres med nem-id</p>
            </div>
          </div>
        </article>

        <article className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/12 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-40 sm:h-48 bg-yellow-400 overflow-hidden flex justify-center items-center">
            <BsHeadset size="82pt" className="text-gray-100" />
            </div>
            <div className="flex flex-col text-center px-6 sm:px-12 py-4 sm:py-10">
                <h2 className="mb-2 font-bold">Support 24/7</h2>
                <p className="text-sm font-light">Support er altid på arbejde, og sikre dig den bedste oplevelse</p>
            </div>
          </div>
        </article>

        <article className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/12 p-2">
          <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
            <div className="relative h-40 sm:h-48 bg-red-400 overflow-hidden flex justify-center items-center">
            <MdOutlineAlarmOn size="82pt" className="text-gray-100" />
            </div>
            <div className="flex flex-col text-center px-6 sm:px-12 py-4 sm:py-10"> 
                <h2 className="mb-2 font-bold">Hurtigt Svar</h2>
                <p className="text-sm font-light">De fleste udlejere svare indenfor 30 minutter</p>
            </div>
          </div>
        </article>
        </div>
        
        
      </div>  
    </section>
        
        
        
      </div>
      
</div>
     
    </div>
    )
}

