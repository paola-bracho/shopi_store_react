import { data } from "autoprefixer"
import { useState, useEffect } from "react"
import { Item } from "./Item"
import { Layout } from "./Layout"

export const ItemListContainer = () => {

const [items, setItems] = useState(null)

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setItems(data))
}, [])

  return(
    <Layout>
      Home
    <div className='grid gap-20 grid-cols-4 w-full max-w-max m-4 mt-8'>
      {
        items?.map(item => (
          <Item key={item.id} data={item} />
        ))
      }
    </div>
    </Layout>
    
  )
}