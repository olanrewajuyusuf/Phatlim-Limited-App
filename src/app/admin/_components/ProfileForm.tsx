"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { editProfileAction } from "../_actions/profileAction";

export default function ProfileForm() {
  // action state: [state, formAction]
  const [state, formAction] = useActionState(editProfileAction, {
    error: null,
    success: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form
      action={formAction}
      className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold text-blue text-center mb-4">
        Change Profile Details
      </h2>

      {/* Profile name */}
      <div className="text-blue">
        <label htmlFor="name" className="block font-medium mb-1">
          New Name/Email
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex focus:ring-2 focus:ring-blue focus:outline-none"
          required
        />
      </div>

      {/* Profile password */}
      <div className="text-blue relative">
        <label htmlFor="password" className="block font-medium mb-1">
          New Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex focus:ring-2 focus:ring-blue focus:outline-none pr-10"
          required
          minLength={6}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-10 text-grey-ex hover:text-blue"
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      </div>

      {/* Confirm password */}
      <div className="text-blue relative">
        <label htmlFor="confirmPassword" className="block font-medium mb-1">
          Confirm Password
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          className="w-full px-3 md:px-5 py-2 rounded-md border border-grey text-grey-ex focus:ring-2 focus:ring-blue focus:outline-none pr-10"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-10 text-grey-ex hover:text-blue"
        >
          {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      </div>

      {/* Error & Success Messages */}
      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}
      {state?.success && (
        <p className="text-green-600 text-sm">
          Profile updated successfully ✅
        </p>
      )}

      {/* Submit Button */}
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
      className={`w-full bg-gradient-to-tr from-blue to-blue-ex text-white px-5 py-3 mt-3 rounded-md shadow shadow-grey cursor-pointer transition
        ${pending ? "opacity-50 cursor-not-allowed" : "hover:from-blue-900 hover:to-blue-700"}`}
    >
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}
