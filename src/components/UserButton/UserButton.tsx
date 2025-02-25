"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { mutate } from "swr";

export function UserButton() {
  const { status } = useSession();
  return (
    <div className="mt-2">
      {status === "authenticated" && (
        <button
          onClick={() => {
            mutate(() => true, undefined, { revalidate: false });
            signOut();
          }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-around gap-2 w-full"
        >
          <FaSignOutAlt size={20} />
          Sign Out
        </button>
      )}
      {status === "unauthenticated" && (
        <button
          onClick={() => {
            mutate(() => true, undefined, { revalidate: false });
            signIn();
          }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-around gap-2 w-full"
        >
          <FaSignInAlt size={20} />
          Sign In
        </button>
      )}
    </div>
  );
}
