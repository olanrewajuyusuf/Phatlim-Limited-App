import Image from 'next/image'
import { ShoppingCartIcon } from "lucide-react"
import { MdFavorite } from "react-icons/md"

export default function FuelSystemPage() {
    const types = ['Oil Filters', 'Fuel filter', 'Cabin air filter', 'Air Filter', 'Water Separator', 'Hydraulic Filters'];
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
        <div className="w-[80%] py-2 md:py-5 bg-[#f4fcfe] h-screen overflow-scroll hide-scrollbar">
            <div className="w-[100%] h-screen overflow-y-scroll hide-scrollbar">
                {types.map((type, idx) => (
                    <div key={idx} className='border-t border-[#c9d0de] pb-2'>
                        <h2 className='border-b border-[#c9d0de] py-1 px-2 md:px-5 mb-2'>{type}</h2>
                        <div className="flex gap-2 md:gap-5 px-2 md:px-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
                            {products.map((product, ind) => (
                            <div
                                key={ind}
                                className="relative flex-shrink-0 w-[150px] md:w-[250px] border border-[#c9d0de] rounded-md overflow-hidden"
                            >
                                <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={250}
                                className="w-full h-[100px] md:h-[150px] object-cover"
                                />
                                <div className="p-1 md:p-3">
                                    <h3 className="font-bold text-sm md:tex-[16px] mb-1 md:mb-3">{product.name}</h3>
                                    <div className="flex justify-between items-start border-b border-[#c9d0de] text-xs md:text-sm">
                                        <small>{product.type}</small>
                                        <div className="flex flex-col justify-center items-end">
                                            <small className="bg-black text-white px-1 rounded-sm">
                                                Brand
                                            </small>
                                            <small>{product.brand}</small>
                                        </div>
                                    </div>
                                    <button className="w-full flex items-center justify-between text-sm font-bold mt-2 px-3 py-1 md:py-1.5 border border-[#c9d0de] hover:bg-[#c9d0de] cursor-pointer rounded-sm">
                                        Add <ShoppingCartIcon />
                                    </button>
                                </div>
                                <span className="absolute top-2 right-2 cursor-pointer text-xl md:text-4xl hover:text-red-500">
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