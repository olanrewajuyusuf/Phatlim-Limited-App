import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
        <div className="bg-blue-ex rounded-md p-1">
            <Image 
                src="/phatlogo.png"
                alt="Phatlim Ventures Logo"
                width={40}
                height={40}
                className="hidden md:block"
            />
            <Image 
                src="/phatlogo.png"
                alt="Phatlim Ventures Logo"
                width={30}
                height={30}
                className="md:hidden"
            />
        </div>
        {/* <div className="">
            <strong
            className='text-sm text-blue bg-white font-extrabold px-1 pt-1 rounded-md'
            >PHATLIM</strong>
            <p
            className='text-sm text-white bg-blue-ex font-medium px-1 pt-1 rounded-md leading-4 tracking-[3px]'
            >Limited</p>
        </div> */}
    </div>
  );
}
