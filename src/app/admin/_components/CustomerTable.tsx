import { formatDateToLocal } from '@/app/_lib/utils';
import prisma from '@/lib/prisma';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import DeleteCustomer from './DeleteCustomer';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pageSize = 20; // Number of products per page

  const customers = await prisma.customer.findMany({
    where: {
      OR: [
        { name: { contains: query || '', mode: "insensitive", } },
      ],
    },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
    orderBy: {
      createdAt: "desc", // newest first
    },
  });

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-grey p-2 md:pt-0">
          <div className="md:hidden">
            {customers?.map((customer: any, ind: number) => (
              <div
                key={ind}
                className="mb-2 w-full rounded-md text-blue bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className='w-10 h-10 bg-grey rounded-full grid place-items-center'>
                        <span>{customer.name.slice(0, 2)}</span>
                      </div>
                      <p>{customer.name}</p>
                    </div>
                    <p className="flex items-center gap-1 pl-10 text-sm text-gray-500"><FaHeadphonesSimple /> {customer.phone}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm font-medium">
                      {customer.email}
                    </p>
                    <p className='text-grey'>{formatDateToLocal(customer.createdAt)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <DeleteCustomer id={customer.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-blue md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {customers?.map((customer: any, ind: number) => (
                <tr
                  key={ind}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <p>{customer.name}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{formatDateToLocal(customer.createdAt)}</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <DeleteCustomer id={customer.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
