import { BsGearWideConnected } from "react-icons/bs";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
        <span className="text-4xl text-blue-900">
            <BsGearWideConnected />
        </span>
        <div className="-mt-2">
            <strong
            className='text-[16px] text-transparent bg-clip-text font-extrabold border-b-2 border-blue-900'
            style={{
              backgroundImage: 'linear-gradient(to right, blue, #040420 )'
            }}
            >PHATLIM</strong>
            <p
            className='text-[16px] text-transparent bg-clip-text font-medium leading-4 tracking-[3px]'
            style={{
              backgroundImage: 'linear-gradient(to right, #facc15, #ec4899)'
            }}
            >Limited</p>
        </div>
    </div>
  );
}
