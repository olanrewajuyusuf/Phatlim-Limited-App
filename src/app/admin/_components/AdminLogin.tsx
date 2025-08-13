"use client";

import { useFormStatus } from "react-dom";
import { loginAction } from "../_actions/actions";
import { useActionState } from "react";

const initialState = { errors: {} };

export default function AdminLogin() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <div className="h-screen grid place-items-center font-script px-10">
      <form
        action={formAction}
        className="bg-grey w-full max-w-[500px] p-5 shadow-lg shadow-gray-700"
      >
        <h1 className="text-blue-ex text-2xl md:text-4xl mb-10 text-center">
          Admin Login
        </h1>

        {/* Email field */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full px-5 py-2 bg-white mb-1 border"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm">{state.errors.email}</p>
          )}
        </div>

        {/* Password field */}
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-5 py-2 bg-white mb-1 border"
          />
          {state.errors?.password && (
            <p className="text-red-500 text-sm">{state.errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <SubmitButton />
      </form>
    </div>
  );
}


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-2 bg-gradient-to-tr from-blue to-blue-ex text-white my-5 cursor-pointer 
        ${pending ? "opacity-50 cursor-not-allowed" : "hover:from-blue-900 hover:to-blue-700"}`}
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
