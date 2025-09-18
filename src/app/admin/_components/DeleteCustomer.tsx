
import { TrashIcon } from "lucide-react";
import { deleteCustomerAction } from "../_actions/deleteCustomer";

export default async function DeleteCustomer({id}: {id: string}) {  
  return (
    <form action={async () => {
        "use server";
        await deleteCustomerAction(id);
        }}>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-4" />
        </button>
    </form>
  )
}
