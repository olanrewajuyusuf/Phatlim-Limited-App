'use client';

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-center px-4">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-gray-800 drop-shadow-sm">404</h1>
        
        {/* Message */}
        <p className="mt-4 text-xl text-gray-600">
            Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Illustration */}
        <div className="mt-6">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 h-40 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L6 21m0 0l-3.75-4M6 21V3m12.75 4l3.75-4m0 0L18 7m3.75-4v18"
            />
            </svg>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
            <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-900 transition"
            >
            Go Back
            </button>
            <button
            onClick={() => router.push("/")}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-800 transition"
            >
            Go Home
            </button>
        </div>
        </div>
    );
}
