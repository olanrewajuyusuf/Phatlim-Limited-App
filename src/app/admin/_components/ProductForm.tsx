"use client";
import { useActionState, useState } from "react";
import { addProductAction } from "../_actions/productActions";
import { useFormStatus } from "react-dom";

// Explicitly type the category array
type CategoryMap = { [key: string]: string[] };
// const initialState = { errors: {} };

const categories: CategoryMap[] = [
  { "Power Train": ['Clutch system', 'Transmission', 'Gear box', 'Propeller shaft', 'Rear Axle'] },
  { "Brake System": ['Brake pad', 'Brake disc', 'Compressor components', 'Air Dryer'] },
  { "Fuel System": ['Oil Filters', 'Fuel filter', 'Cabin air filter', 'Air Filter', 'Water Separator', 'Hydraulic Filters'] },
  { "Electrical System": ['Battery', 'Lamps', 'Bulbs', 'Sensors', 'Column switches'] },
  { "Carbin & Body Parts": ['Side Deflectors', 'Bumpers', 'Mirrors', 'Side doors', 'Step board'] },
  { "Steering & Suspension": ['King pins', 'Tie rod', 'Drag link', 'Bushing', 'Leaf Springs'] },
  { "Tyres": ['12R 22.5', '315/80 22.5', '385', '285/70 R19.5'] },
  { "Rims": ['9.0', '11.25', '8.25'] },
  { "Trailer Spares": [] },
  { "Others": ['Accessories', 'IT', 'Safety', 'Office Consumables', 'Tools'] },
];

export default function ProductForm() {
    const [error, productAction] = useActionState(addProductAction, []);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [types, setTypes] = useState<string[]>([]);
    // const err = error.filter((err: any) => err.path[0] === "file");
    // console.log("Error:", err[0]?.message);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryName = e.target.value;
        setSelectedCategory(categoryName);

        const categoryObj = categories.find(cat => Object.keys(cat)[0] === categoryName);
        if (categoryObj) {
        setTypes(categoryObj[categoryName]); // ✅ TypeScript now knows this is fine
        } else {
        setTypes([]);
        }
    };

  return (
    <form action={productAction}>
      {/* Product name */}
      <div className="text-blue">
        <label htmlFor="name">Product name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex"
        />
        {/* {error.filter((err: any) => err.path?.[0] === "name").map((err: any, index: number) => (
          <p key={index} className="text-red-500 text-sm">
            {err.message}
          </p>
        ))} */}
      </div>

      {/* Category */}
      <div className="text-blue my-3">
        <label htmlFor="category">Choose category</label>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex"
        >
          <option value="">-- Select a category --</option>
          {categories.map((cat) => {
            const key = Object.keys(cat)[0];
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
        {/* {error.filter((err: any) => err.path?.[0] === "category").map((err: any, index: number) => (
          <p key={index} className="text-red-500 text-sm">
            {err.message}
          </p>
        ))} */}
      </div>

      {/* Type */}
      <div className="text-blue my-3">
        <label htmlFor="type">Choose type (Optional)</label>
        <select
          name="type"
          id="type"
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex"
          disabled={types.length === 0}
        >
          <option value="">-- Select a type --</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* File upload */}
      <div className="text-blue my-3">
        <label htmlFor="file">Product image</label>
        <input
          type="file"
          id="file"
          name="file"
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex"
        />
        {/* {error.filter((err: any) => err.path?.[0] === "name").map((err: any, index: number) => (
          <p key={index} className="text-red-500 text-sm">
            {err.message}
          </p>
        ))} */}
      </div>

      {/* Submit */}
      {/* <button
        type="submit"
        className="bg-blue hover:bg-blue-ex text-white px-5 py-3 mt-3 rounded-md shadow shadow-grey"
      >
        Submit
      </button> */}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-gradient-to-tr from-blue to-blue-ex text-white px-5 py-3 mt-3 rounded-md shadow shadow-grey cursor-pointer 
        ${pending ? "opacity-50 cursor-not-allowed" : "hover:from-blue-900 hover:to-blue-700"}`}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
}
