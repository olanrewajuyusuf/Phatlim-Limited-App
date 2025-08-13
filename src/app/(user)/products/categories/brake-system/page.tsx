import CategoriesCard from "../../_components/CategoriesCard";

export default function BrakeSystemPage() {
    const types = ['Brake pad', 'Brake disc', 'Compressor components', 'Air Dryer'];
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
        <div className="w-[80%] py-2 md:py-5 overflow-scroll hide-scrollbar">
            <div className="w-[100%] h-screen overflow-y-scroll hide-scrollbar">
                {types.map((type, idx) => (
                    <div key={idx} className='border-t border-grey pb-2'>
                        <h2 className='font-semibold border-b border-grey py-1 px-2 md:px-5 mb-2'>{type}</h2>
                        <div className="flex gap-2 md:gap-5 px-2 md:px-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
                            {products.map((product, ind) => (
                                <CategoriesCard key={ind} name={product.name} image={product.image} type={product.type} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}