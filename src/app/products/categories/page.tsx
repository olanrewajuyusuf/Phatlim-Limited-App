import Image from 'next/image'
import { ShoppingCartIcon } from "lucide-react"
import { MdFavorite } from "react-icons/md"
import { BsCart4 } from 'react-icons/bs'

export default function CategoriesPage() {
    const types = ['Clutch system', 'Transmission', 'Gear box', 'Propeller shaft', 'Rear Axle']
    const products = [
        {
          name: 'OEM Brake Pads',
          image: '/images/products/brake-pads.jpg',
          brand: 'Hengst',
          type: 'Brake pad',
        },
        {
          name: 'Heavy-duty Filters',
          image: '/images/products/filter.png',
          brand: 'Continental',
          type: 'Air Filter',
        },
        {
          name: 'Truck Tyres',
          image: '/images/products/tyres.jpg',
          brand: 'Castro',
          type: '12R 22.5',
        },
        {
          name: 'Battery',
          image: '/images/products/battery2.jpg',
          brand: 'Auto-Battery',
          type: 'Battery',
        },
        {
          name: 'Battery',
          image: '/images/products/battery2.jpg',
          brand: 'Auto-Battery',
          type: 'Battery',
        },
        {
          name: 'Battery',
          image: '/images/products/battery2.jpg',
          brand: 'Auto-Battery',
          type: 'Battery',
        },
    ]

    return (
        <div className="w-[80%] py-2 md:py-5 h-screen overflow-scroll hide-scrollbar">
            <div className="w-[100%] h-screen overflow-y-scroll hide-scrollbar">
                {types.map((type, idx) => (
                    <div key={idx} className='border-t border-grey pb-2'>
                        <h2 className='font-semibold border-b border-grey py-1 px-2 md:px-5 mb-2'>{type}</h2>
                        <div className="flex gap-2 md:gap-5 px-2 md:px-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
                            {products.map((product, ind) => (
                            <div
                                key={ind}
                                className="relative flex-shrink-0 w-[150px] md:w-[250px] bg-grey border border-grey rounded-md overflow-hidden"
                            >
                                <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={250}
                                className="w-full h-[100px] md:h-[150px] object-cover"
                                />
                                <div className="p-1 md:p-3">
                                    <h3 className="font-bold text-sm mb-1">{product.name}</h3>
                                    <div className="flex justify-between items-start border-t border-white pt-2">
                                        <div className="flex flex-col justify-center items-start">
                                            <small className="bg-blue text-white px-2 rounded-sm">Type</small>
                                            <small className="font-bold">{product.type}</small>
                                        </div>
                                        <button className="flex items-center gap-2 text-sm px-2 py-1 text-white border border-blue-ex bg-blue hover:bg-blue-ex cursor-pointer rounded-sm">
                                            Add <BsCart4 />
                                        </button>
                                    </div>
                                </div>
                                <span className="absolute top-2 right-2 cursor-pointer text-blue text-xl md:text-3xl hover:text-red-500">
                                    <MdFavorite />
                                </span>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}