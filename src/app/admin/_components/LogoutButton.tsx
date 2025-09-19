'use client'

import { useTransition } from 'react'
import { logout } from '../_actions/logout'
import { FaSignOutAlt } from 'react-icons/fa'

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => logout())}
      disabled={isPending}
      className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 hover:text-red-500 text-gray-700"
    >
      <FaSignOutAlt className="text-red-500" />
      Logout
    </button>
  )
}
