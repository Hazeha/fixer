/*eslint-disable */
import { Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { RiSecurePaymentLine } from 'react-icons/ri'
import { GiSandsOfTime } from 'react-icons/gi'
import { MdFreeCancellation } from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

export default function ProductCard({ products }) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])
    async function fetchImages() {
        const productWithImages = await Promise.all(products.map(async item => {
        if (item.coverImage) {
            item.coverImage = await Storage.get(item.coverImage)
        }
        return item
        }))
        setProduct(productWithImages)
    }

    return (
    product.map((item, index) => (
    <Link key={index} href={`/products/${item.id}`}>
        <div key={index} href={`/products/${item.id}`} className="sm:w-full md:w-1/2 xl:w-1/3 p-2 cursor-pointer">
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
  )
}

