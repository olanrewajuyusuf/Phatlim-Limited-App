import Image from "next/image";

type CardProps = {
    title: string;
    icon: React.ReactNode;
    image: string;
};

export default function ServiceCard({title, icon, image}: CardProps) {
  return (
    <>
        <div className="flex flex-col justify-end items-end relative z-10">
            <span 
            className="w-14 h-14 text-white border-2 border-white rounded-full bg-gradient-to-b from-yellow-300 to-pink-500 grid place-items-center"
            >
                {icon}
            </span>
            <h3 className="text-xl mt-3 w-[65%] text-right">{title}</h3>
        </div>
        <div className="shade-card"></div>
        <Image src={image} alt='service' width={300} height={300} className="absolute z-10 -left-2 -bottom-5" />
    </>
  )
}
