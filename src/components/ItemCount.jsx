import { useState } from "react";


export const ItemCount = ({ startvalue, stock }) => {
    
    const [count, setCount] = useState(startvalue);
    const increase = () => (count < stock) && setCount(count + 1)
    const decrease = () => (count > startvalue) && setCount(count - 1)
    return (
        <div>
            <button className="" onClick={() => decrease()}>🔻</button>
            {count}
            <button className="" onClick={() => increase()}>🔺</button>
        </div>
    );
}

    