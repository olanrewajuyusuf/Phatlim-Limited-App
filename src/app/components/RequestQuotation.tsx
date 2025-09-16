import Image from "next/image";
import Link from "next/link";

export default function RequestQuotation() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-100 shadow-md rounded-2xl p-6 m-10">
      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        
        {/* Illustration */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/rfq.png"
            alt="Request Quotation Illustration"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Can’t find what you’re looking for?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We’ve got you covered! If the product you need isn’t listed in our catalog, 
            simply send us a request. Our team will quickly get back to you with a customized 
            quotation tailored to your needs.
          </p>

          {/* CTA Button */}
          <Link href="/products/cart" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
              Request a Quotation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
