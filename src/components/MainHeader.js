import GetPostImgStack from './bgImg'
import {RiSearch2Line} from 'react-icons/ri'
import {BiMapPin} from 'react-icons/bi'
import {BsCalendarDate} from 'react-icons/bs'
export default function MainHeader() {
    return(
        <header className="flex flex-row justify-center h-1/3">
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
    )
}