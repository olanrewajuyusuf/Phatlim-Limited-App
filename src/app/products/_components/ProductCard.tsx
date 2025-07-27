import { ShoppingCartIcon } from "lucide-react"
import Image from "next/image"
import { MdFavorite } from "react-icons/md"

type CardTypes = {
    name: string,
    brand: string,
    type: string,
    image: string,
}

export default function ProductCard({name, brand, type, image} : CardTypes) {
  return (
    <div className="relative w-full border border-[#c9d0de] rounded-md overflow-hidden">
        <Image 
        src={image}
        alt={name}
        width={250}
        height={250}
        className="w-full h-[150px] md:h-[200px] object-cover"
        />
        <div className="p-3">
            <h3 className="font-bold mb-3">{name}</h3>
            <div className="flex justify-between items-start border-b border-[#c9d0de]">
                <small>{type}</small>
                <div className="flex flex-col justify-center items-end">
                    <small className="bg-black text-white px-1 rounded-sm">Brand</small>
                    <small>{brand}</small>
                </div>
            </div>
            <button className="w-full flex items-center justify-between text-sm font-bold mt-2 px-3 py-1.5 border border-[#c9d0de] hover:bg-[#c9d0de] cursor-pointer rounded-sm">
                Add <ShoppingCartIcon />
            </button>
        </div>
        <span className="absolute top-2 right-2 cursor-pointer text-2xl md:text-4xl hover:text-red-500"><MdFavorite /></span>
    </div>
  )
}
