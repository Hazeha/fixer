import { listCategories } from "../../src/graphql/custom"
import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import Link from 'next/link'

export function CategoryIndex() {
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
      const filteredCategories = uniqueCategories.filter(function (item) { return item != null})
      setCategories(filteredCategories)
    }
    return categories
}

export default function Categories() {
    const categories = CategoryIndex()
    console.log(categories)

    function ListItem ({title}){
        return(
            <li className="border-yellow-400 border-2 rounded py-2 px-7 mr-2 mb-2">{title}</li>
        )
    }
    return(
        <section className="bg-white" >
            <div className="z-20 pt-3 text-xl container mx-auto pb-6 mb-6">
                <h1 className="text-3xl font-light">Vores mest populære kategorier</h1>
                <ul className="mt-4 flex flex-row flex-wrap w-4/5">
                    {
                        categories.map((category, index) => (
                            <Link key={index} href={`/products/category/${category.toLowerCase()}`}>
                                <li className="border-yellow-400 border-2 rounded py-2 px-7 mr-2 mb-2 cursor-pointer">{category}</li>
                            </Link>
                        ))
                    }
                    <a href="/products" className="text-base mt-auto mb-2 text-purple-600">Se alle kategorier...</a>
                </ul>
            </div>
        </section>
    )
}

