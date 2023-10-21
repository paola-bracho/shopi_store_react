
export const ItemDetail = ({item}) => {


    return (
        <div className="flex flex-row m-8">
          <img className="w-40 m-2 mr-10" src={item.image} alt={item.title} />
          <div className="">
            <p className="text-sm">{item.category}</p>
            <p className="text-3xl my-4">{item.title}</p>
            <p className="text-base">{item.description}</p>
            <p className="text-2xl my-4">{item.price} $</p>
            <a href="#">Buy now</a>
          </div>
        </div>
      )
}