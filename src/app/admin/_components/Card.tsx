export default function Card({title, amt}: {title: string, amt: number}) {  
  return (
    <div className="border border-grey shadow-sm shadow-grey rounded-md p-5 text-center">
        <p>{title}</p>
        <hr className="h-0.5 w-1/2 bg-blue mx-auto" />
        <p className="text-4xl md:text-6xl font-script font-bold text-blue mt-5">{amt}</p>
    </div>
  )
}
