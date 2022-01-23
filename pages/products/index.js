import { listCategories } from "../../src/graphql/custom"
import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import Link from 'next/link'
import GetAllProducts from "../../src/components/productComponent"

export default function ProductIndex() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      fetchProducts()
    }, [])
    async function fetchProducts() {
      const postData = await API.graphql({
        query: listCategories
      })
      
      const categoryData = postData.data.listProducts.items.map((item) => item.category)
      const uniqueCategories = [...new Set(categoryData)]
      setCategories(uniqueCategories)
    }
  return(
    <div className="flex flex-row flex-wrap w-4/5 justify-around mx-auto">
      <div className="w-1/5 p-2 bg-gray-50 shadow-md h-56">
        <h2 className="text-lg font-semibold">Kategorier</h2>
        <ul className="border-t border-yellow-400">
          {
            categories.map((item, index) => <li key={index} className="hover:underline cursor-pointer ease-in-out">
              <Link href={`/products/category/${item.toLowerCase()}`}>{item}</Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className="w-4/5">
        <GetAllProducts />
      </div>
    </div>
    )
}

