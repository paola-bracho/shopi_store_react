import { useEffect, useState } from "react"
import { pedirItemPorId } from "../pedirDatos"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = ( {itemId} ) => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        pedirItemPorId(itemId)
        .then((res) => {
            setItems(res);
        })
    }, [])

    return (
        <>
         <ItemDetail item={item} />
        </>
    )
}