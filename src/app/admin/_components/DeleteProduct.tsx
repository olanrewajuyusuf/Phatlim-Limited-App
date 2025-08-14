
import { TrashIcon } from "lucide-react";
import { deleteProductAction } from "../_actions/deleteProduct";

export default async function DeleteProduct({id}: {id: string}) {  
  return (
    <form action={async () => {
        "use server";
        await deleteProductAction(id);
        }}>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-4" />
        </button>
    </form>
  )
}
