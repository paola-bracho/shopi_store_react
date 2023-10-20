export const ItemDetail = (item) => {


    return (
        <div>
            <div>
                <img src={item.image} alt={item.description} />
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                </div>
            </div>
        </div>
    )
}