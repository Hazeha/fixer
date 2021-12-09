import GetPostCard from './postCard/postCard'
import GetPostImgStack from './bgImg'
import {RiSearch2Line, RiShieldCheckFill} from 'react-icons/ri'
import {BiMapPin, BiCycling, BiLike, BiHappyAlt} from 'react-icons/bi'
import {BsCalendarDate, BsHeadset} from 'react-icons/bs'
import {GiShatteredGlass, GiPiggyBank} from 'react-icons/gi'
import {MdOutlineAlarmOn} from 'react-icons/md'
import Link from 'next/Link'
import Image from 'next/image'

export default function Home() {
  return(
    <div>
      <header className="flex flex-row justify-center pt-7 h-1/3">
        <div className="bg-opacity-80 bg-gray-600 z-10 w-full h-1/3">
          <div className="">
            <h1 className="mt-12 text-center text-5xl font-bold text-gray-100 z-50">Lej istedet for at købe</h1>
            <h3 className="mt-2 text-center text-3xl font-semibold text-gray-100">I nærheden og til tider, der passer dig</h3>
            <div className="mt-12 relative text-gray-600 w-96 mx-auto">
              <input type="search" name="serch" placeholder="Søg efter det du mangler.." className="bg-white shadow-sm focus:shadow-lg h-12 px-5 pr-10 rounded-sm w-full text-xl focus:outline-none" />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <RiSearch2Line size="18pt" />
              </button>
            </div>
            <div className="mt-6 flex flex-row justify-center">
              <BiMapPin className="text-gray-100 mr-1" size="18pt" /> <p className="text-gray-100"> Tæt på København. <span className="text-xs text-gray-400">(opdater)</span> </p> 
            </div>
            <div className="mt-2 flex flex-row justify-center">
              <BsCalendarDate className="text-gray-100 mr-2" size="18pt" /> 
              <p className="text-gray-100 mb-8"> Tilgængelig Nu. 
                <span className="text-xs text-gray-400">(skift dato)</span>
              </p> 
            </div>
            
          </div>
          
        </div>
       
        {GetPostImgStack()}
        
        
      </header>
      
      <section className="bg-white" >
        <div className="z-20 pt-3 text-xl container mx-auto pb-6 mb-6">
        <h1 className="text-3xl font-light">Vores mest populære kategorier</h1>
        <ul className="mt-4 flex flex-row flex-wrap w-4/5">
          <li className="border-purple-600 border-2 font-normal rounded py-2 px-7 mr-2 mb-2">ecound post</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound postecound</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">Link 1</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound postecound postecound post</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound postecgffgfgggnd</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound postkk</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound postecound posnd post</li>

          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">Link 1ujkhjk</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound post678678</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">ecound posound</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">Link 1</li>
          <li className="border-purple-600 border-2 rounded py-2 px-7 mr-2 mb-2">Link 1</li>
          <a href="#" className="text-base mt-auto mb-2 text-purple-600">Se alle kategorier...</a>
        </ul>
        
        </div>
      </section>
      <section>
      {
        GetPostCard()
      }
      </section>
      
    
    </div>
    )
}

