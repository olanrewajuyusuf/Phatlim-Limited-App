import { BsCart4 } from "react-icons/bs";
import Image from "next/image"
import { MdFavorite } from "react-icons/md"

type CardTypes = {
    name: string,
    type: string,
    image: string,
}

export default function CategoriesCard({name, type, image} : CardTypes) {
  return (
    <div
        className="relative flex-shrink-0 w-[150px] md:w-[250px] bg-grey border border-grey rounded-md overflow-hidden"
    >
        <Image
        src={image}
        alt={name}
        width={250}
        height={250}
        className="w-full h-[100px] md:h-[150px] object-cover"
        />
        <div className="p-1 md:p-3">
            <h3 className="font-bold text-sm mb-1">{name}</h3>
            <div className="hidden md:flex justify-between items-start border-t border-white pt-2">
                <div className="flex flex-col justify-center items-start">
                    <small className="bg-blue text-white px-2 rounded-sm">Type</small>
                    <small className="font-bold">{type}</small>
                </div>
                <button className="flex items-center gap-2 text-sm px-2 py-1 text-white border border-blue-ex bg-blue hover:bg-blue-ex cursor-pointer rounded-sm">
                    Add <BsCart4 />
                </button>
            </div>

            <div className="md:hidden">
                <div className="flex justify-between items-start border-b border-white pb-2">
                    <small className="bg-blue text-white px-2 rounded-sm">Type</small>
                    <small className="font-bold">{type}</small>
                </div>
                <button className="w-full flex justify-between items-center gap-2 text-sm px-2 py-1 mt-2 text-white border border-blue-ex bg-blue hover:bg-blue-ex cursor-pointer rounded-sm">
                    Add <BsCart4 />
                </button>
            </div>
        </div>
        <span className="absolute top-2 right-2 cursor-pointer text-blue text-xl md:text-3xl hover:text-red-500">
            <MdFavorite />
        </span>
    </div>
  )
}
