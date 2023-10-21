import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(response=>response.json())
            .then(data=>setProduct(data))
        }, [])

    return (
        <div>
        
            {product ? <ItemDetail item={product} /> : <h5>Producto no encontrado</h5>}
        
        </div>
    )
}
