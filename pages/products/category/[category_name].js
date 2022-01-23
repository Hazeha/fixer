/*eslint-disable */
import { API } from 'aws-amplify'
import { listCategories } from '../../../src/graphql/custom'
import { listProducts } from '../../../src/graphql/queries'
import { useState, useEffect } from 'react'
import ProductCard from '../../../src/components/productCard'
import Link from 'next/link'

export default function CategoryPage({ products, category_name }) {
    const str = category_name
    const category = str.charAt(0).toUpperCase() + str.slice(1);

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

    return (
        <div className="container mx-auto flex flex-row flex-wrap">
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
                <h1 className="text-3xl pl-4 font-semibold">{category}</h1>
                <div className="flex flex-wrap mx-4">
                    <ProductCard products={products} />
                </div> 
            </div>
            
        </div>
    )
}

export async function getStaticPaths() {
    const postData = await API.graphql({
        query: listCategories
    })
      
    const categoryData = postData.data.listProducts.items.map((item) => item.category)
    const uniqueCategories = [...new Set(categoryData)]
    const filteredCategories = uniqueCategories.filter(function (item) { return item != null})
    const lowerData = filteredCategories.map((item) => {
        return item.toLowerCase()
    })
    const paths = lowerData.map(category => ({ params: { category_name: category }}))
  
    return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: {category_name} }) {
    const postData = await API.graphql({
        query: listProducts
    })
    
    // Filter Products
    const categoryProducts = postData.data.listProducts.items.filter(product => product.category.toLowerCase() === category_name)
    console.log(categoryProducts)
    return {
        props: {
          products: categoryProducts,
          category_name: category_name
        }
      }
}

