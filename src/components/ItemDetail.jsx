import { XMarkIcon } from "@heroicons/react/24/solid"


export const ItemDetail = (data) => {

    return (
        <div className='product-detail flex flex-row fixed border border-black rounded-lg bg-white items-center w-80'>
          <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
              <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
            </div>
          </div>
        </div>
      )

    // return (
    //     <div>
    //         <div>
    //             <img src={data.image} alt={data.description} />
    //             <div>
    //                 <p>{data.title}</p>
    //                 <p>{data.price}</p>
    //             </div>
    //         </div>
    //     </div>
    // )
}