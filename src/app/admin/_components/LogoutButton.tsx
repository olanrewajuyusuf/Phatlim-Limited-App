'use client'

import { useTransition } from 'react'
import { logout } from '../_actions/logout'
import { LogOutIcon } from 'lucide-react'

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => logout())}
      className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded cursor-pointer"
      disabled={isPending}
    >
        <LogOutIcon className="inline" />
    </button>
  )
}
