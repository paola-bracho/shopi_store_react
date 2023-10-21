import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const id = useParams().id

    useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(response=>response.json())
            .then(data=>setProduct(data))
        }, [id])

    return (
        <div>
        
            {product ? <ItemDetail item={product} /> : <h5>Producto no encontrado</h5>}
        
        </div>
    )
}
