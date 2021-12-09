import {RiSearch2Line} from 'react-icons/ri'
import {BiMapPin} from 'react-icons/bi'
import {BsCalendarDate, BsPerson} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'

import Link from 'next/Link'


export default function Header() {
return(
<header className="border-gray-500 shadow-lg bg-white">
        <div className="flex flex-row justify-center pt-8 px-3 h-1/3 gap-3">
          <div className="text-center w-5/12 flex flex-row cursor-default">
              <h1 className="text-4xl font-bold ">Fixers</h1><h1 className="text-4xl font-bold text-yellow-400">.dk</h1>
          </div>
              
          <div className=" z-10 w-full h-1/3">
            <div className="">
                

              <div className="relative text-gray-600 w-full mx-auto">
                <input type="search" name="serch" placeholder="Søg efter det du mangler.." className="bg-gray-100 shadow-sm hover:border-gray-600 focus:border-gray-600 focus:shadow-lg h-12 px-5 pr-10 rounded-sm w-full text-xl focus:outline-none border-yellow-400 border-2" />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                  <RiSearch2Line size="18pt" />
                </button>
              </div>

              <div className="flex flex-row justify-center gap-5 mt-3 mb-5">
                  <div className="flex flex-row justify-center hover:text-yellow-400 cursor-pointer">
                  <BiMapPin className="mr-1" size="14pt" /> <p className="">Tæt på København. <span className="text-xs text-gray-400 ">(opdater)</span> </p> 
                  </div>
                  <div className="flex flex-row justify-center hover:text-yellow-400 cursor-pointer">
                  <BsCalendarDate className=" mr-1" size="14pt" /> 
                  <p className="">Tilgængelig Nu. <span className="text-xs text-gray-400 cursor-pointer">(opdater)</span>
                  </p> 
                  </div>
              </div>
            </div>
          </div>
          <div className="w-5/12 flex flex-row justify-around">
              <Link className="" href="/browse">
                <div className="justify-center text-center w-2/6 cursor-default">
                  <div className="shadow-lg cursor-pointer border-yellow-400  hover:border-gray-700 border-2 w-14 h-14 rounded-full font-medium text-gray-700 hover:text-yellow-400 transition duration-200 each-in-out mx-auto items-center justify-center flex">
                    <BsPerson size="26pt" className=""/>
                    
                  </div>
                  <p className="curser-default">Søg</p>
                </div> 
              </Link>
              <Link className="" href="profile">
                <div className="justify-center text-center w-2/6 cursor-default">
                  <div className="shadow-lg cursor-pointer border-yellow-400 hover:border-gray-700 border-2 w-14 h-14 rounded-full font-medium text-gray-700 hover:text-yellow-400 transition duration-200 each-in-out mx-auto items-center justify-center flex">
                    <BsPerson size="26pt" className=""/>
                    
                  </div>
                  <p className="curser-default">Profil</p>
                </div> 
              </Link>
              <Link className="" href="/">
                <div className="justify-center text-center w-2/6 cursor-default">
                  <div className="shadow-lg cursor-pointer border-yellow-400 hover:border-gray-700 border-2 w-14 h-14 rounded-full font-medium text-gray-700 hover:text-yellow-400 transition duration-200 each-in-out mx-auto items-center justify-center flex">
                    <BsPerson size="26pt" className=""/>
                    
                  </div>
                  <p className="">Beskeder</p>
                </div> 
              </Link>
          </div>
        </div>
        <div className=" flex bg-gray-200 h-16">
          <button className="my-auto w-44 hover:bg-yellow-400 transition duration-200 each-in-out">
            <div className="h-16 flex flex-row justify-center items-center">
              <FiMenu size="21pt"/> 
              <p className="font-semibold ml-2">Alle produkter</p>
            </div>
          </button>
          <button className="my-auto w-36 border-2 px-3 py-1 rounded m-1">Nye Opslag</button>
          <button className="my-auto w-36 border-2 px-3 py-1 rounded m-1">Dine Opslag</button>
          <button className="my-auto w-36 border-2 px-3 py-1 rounded m-1">Håndværkere</button>
          <button className="my-auto w-40 border-2 px-3 py-1 rounded ml-auto bg-yellow-400 h-12 mr-3 text-gray-700 font-semibold">Opret Udlejning</button>
        </div>
      </header>
)
}
/**
type User @model
{
  id: ID!
  username: String!
  email: String!
  firstname: String
  lastname: String
  verified: Boolean
  location: String
  rating: Int
  products: [Product] @connection
  posts: [Post] @connection
}

type Post @model
  @auth(rules: [
    { allow: owner, ownerField: "username" },
    { allow: public, operations: [read] }
  ]) {
  id: ID!
  title: String!
  content: String!
  category: String
  type: String
  username: String
  coverImage: String
  images: String
  price: Float
  discount: Float
}

type Product @model
  @auth(rules: [
    {allow: owner, ownerField: "username"},
    {allow: public, operations: [read]}
  ])
{
  id: ID!
  name: String!
  discription: String
  category: String
  priceDay: Float
  priceWeek: Float
  rating: Int
  username: String
  createdAt: String
  baseType: String
  coverImage: String
  images: String
}
type Comment @model 
{
  id: ID!
  postID: ID!
  content: String!
} */