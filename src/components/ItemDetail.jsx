import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemDetailContainer } from "./ItemDetailContainer";

 
export const ItemDetail = (data) => {


    return (
        <div>
          <img src={data.image} alt="" />
          <p>categoria</p>
          <p>titulo</p>
          <p>precio</p>
        </div>
      )
}