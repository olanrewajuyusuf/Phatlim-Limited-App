'use client';

import { useState } from "react";
import Image from "next/image";
import { useStore } from "@/app/context/StoreContext";
import { MdDelete, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { toast } from "sonner";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { useRouter } from "next/router";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            cart,
        }),
        });

        const data = await res.json();

        if (data.success) {
          setFormData({ name: "", email: "", phone: "", message: "" }); // ✅ reset form properly
          clearCart(); // ✅ clear cart after successful checkout request
          router.back();
          toast.success("Checkout request sent successfully!");
        } else {
          toast.error(data.error || "Something went wrong");
        }
    } catch (error) {
        toast.error("Failed to send checkout request");
    } finally {
        setLoading(false);
    }

  };

  return (
    <div className="grid md:flex gap-6 p-2 md:p-5">
      {/* Cart Section */}
      <div className="md:w-1/2 border rounded-lg shadow-sm lg:h-[500px] overflow-y-scroll hide-scrollbar">
        <div className="px-6 py-3 font-semibold border-b text-blue-ex">Cart Items</div>
        {cart.length === 0 ? (
          <div className="p-3 pt-10 text-center text-sm text-gray-500">No cart item yet</div>
        ) : (
          <ul className="divide-y">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between items-end px-6 py-2 hover:bg-gray-100">
                <div className="flex items-baseline-last flex-wrap gap-2 w-[200px] md:w-[300px]">
                  <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-s-sm" />
                  <div>
                    <span className="truncate text-blue flex items-center gap-1 mb-1"><MdOutlineProductionQuantityLimits className="text-yellow-600" />{item.name}</span>
                    <span className="text-sm text-grey flex items-center gap-1"><VscTypeHierarchySub className="text-orange-600" />{item.type || 'Unspecified'}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item.name);
                    toast.info(`${item.name} removed from cart`);
                  }}
                  className="bg-grey p-2 rounded-sm text-red-500 text-lg cursor-pointer"
                >
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 border rounded-lg shadow-sm p-6">
        <h2 className="text-lg text-blue-ex font-semibold mb-4">{cart.length === 0 ? "Request for Quotation Form" : "Checkout Form"}</h2>
        <form onSubmit={handleCheckout} className="space-y-4 text-blue">
          <div>
            <label className="block text-sm mb-1">Name / Company Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">{cart.length === 0 ? "Add your request..." : "Additional Message (Optional)"}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              rows={3}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue text-white py-2 rounded-md hover:bg-blue-ex transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : cart.length === 0 ? "Request" : "Checkout"}
          </button>
        </form>
      </div>
    </div>
  );
}
