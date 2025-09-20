import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="flex items-center gap-1 md:gap-2">
        <div className="bg-white rounded-md p-1">
            <Image 
                src="/phatlogo.png"
                alt="Phatlim Ventures Logo"
                width={35}
                height={35}
                className="hidden md:block"
            />
            <Image 
                src="/phatlogo.png"
                alt="Phatlim Ventures Logo"
                width={25}
                height={25}
                className="md:hidden"
            />
        </div>
        <div className="text-grey pt-1 md:pt-0.5">
            <h1
            className='text-sm md:text-[16px] font-bold rounded-md'
            >PHATLIM</h1>
            <p
            className='text-sm md:text-[16px] text-white font-medium rounded-md -mt-1 md:mt-0 leading-4 tracking-[2.5px] md:tracking-[3px]'
            >Limited</p>
        </div>
    </div>
  );
}
