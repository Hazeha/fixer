/*eslint-disable */
import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { listProducts, getProduct, getUser } from '../../src/graphql/queries'
import {BiTimeFive} from 'react-icons/bi'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Maps from '../../src/components/Maps'


export default function Product({ product, user }) {
  const [coverImage, setCoverImage] = useState(null)
  const [userImage, setUserImage] = useState()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [rentDays, setRentDays] = useState(null);
  

  useEffect(() => {
    updateCoverImage()
  }, [])
  async function updateCoverImage() {
    if (product.coverImage) {
      const imageKey = await Storage.get(product.coverImage)
      setCoverImage(imageKey)
    }
  }


  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  useEffect(() => {
    if(startDate && endDate)
      setRentDays((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
  }, [endDate])
  const Calender = () => {
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      
    };
    return (
      <div className="w-full text-center">
        <p className="text-lg">Vælg dato for leje</p>
        <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        selectsDisabledDaysInRange
        inline
      />
      </div>
      
    );
  };
  return (
    <div className="flex flex-row justify-center mt-4">
      <div className="flex flex-row justify-center md:w-4/5 lg:w-5/6 xl:w-3/5">
        <div className="w-3/4 border mr-1 shadow bg-white">
          <div className="w-4/5 mx-auto">
            <h1 className="text-5xl font-semibold tracking-wide">{product.name}</h1>
            <div className="flex flex-row align-center mb-2">
              <h2 className="text-2xl font-bold mr-3">{product.price} kr.</h2>
              <div className="mt-auto flex flex-row">
                <BiTimeFive className="my-auto"/>
                <p className="ml-1"> {product.createdAt.substring(0,10)}</p>
              </div>
              
            </div>
          </div>
          
          <div className="border-b border border-gray-300 w-4/5 mx-auto  mx-auto my-1" />
          {
          coverImage && 
            <div className="w-4/5 flex flex-row mx-auto" >
              <img src={coverImage} className="w-3/5" alt="product"/>
              <div className="w-2/5 flex flex-row flex-wrap ml-1">
                <img src={coverImage} className="w-6/12 border border-white" alt="product"/>
                <img src={coverImage} className="w-6/12 border border-white" alt="product"/>
                <img src={coverImage} className="w-6/12 border border-white" alt="product"/>
                <img src={coverImage} className="w-6/12 border border-white" alt="product"/>
                <img src={coverImage} className="w-6/12 border border-white" alt="product"/>
                
              </div>
            </div>
          
          }
          <div className="border-b border border-gray-300 w-4/5 mx-auto my-1" />
          <div className="w-4/5 mx-auto">
            <ReactMarkdown className='prose' children={product.name + '. ' + product.discription} />
            
          </div>
          
        </div>
        <div className="border-slate-900 ml-1 pt-2 shadow bg-white w-64">
          <p className="text-lg text-center">Oplysninger</p>
          <p className="text-md font-light my-1 ml-4">{user.firstname} {user.lastname} </p>
          <p className="text-md font-light my-1 ml-4">{user.location || 'Adresse'} </p>
          <p className="text-md font-light my-1 ml-4">{user.createdAt.substring(0,10)} </p>
          <p className="text-md font-light my-1 ml-4">{user.lastname ? 'Verificeret' : 'Ikke Verificeret'} </p>
          <p className=''>{user.location} </p>
          <p className=""></p>
          <div className="border-b border border-gray-300 w-4/5 mx-auto my-1" />
          <div className="mx-auto text-center">
            
            <Maps />
          </div>
          
          <div className="border-b border border-gray-300 w-4/5 my-1" />
          
            
            <Calender className="w-10/12" />
          
          
          <div className="border-b border border-gray-300 w-4/5 mx-auto" />

          <div className="flex flex-row flex-end pr-4">
            <p className="ml-auto text-xl font-semibold">Pris: {(rentDays * product.price) || product.price}</p>
          </div>
          <div className="border-b border border-gray-300 w-4/5 mx-auto my-1" />
          <div className="flex flex-row justify-center">
            <button className='w-40 border px-3 py-1 rounded my-2 bg-yellow-400 hover:bg-yellow-500 h-12 text-gray-700 font-semibold' onClick={() => (console.log(rentDays))}>Send anmodning</button>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export async function getStaticPaths() {
  const productData = await API.graphql({
    query: listProducts
  })
  const paths = productData.data.listProducts.items.map(product => ({ params: { id: product.id }}))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params
  const productData = await API.graphql({
    query: getProduct, variables: { id }
  })
  
  const userData = await API.graphql({
    query: getUser, variables: { id: productData.data.getProduct.username }
  })
  console.log(userData.data.getUser)
  return {
    props: {
      product: productData.data.getProduct,
      user: userData.data.getUser
    },
    revalidate: 220
  }
}