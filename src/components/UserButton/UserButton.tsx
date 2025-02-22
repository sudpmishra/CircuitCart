"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";

export function UserButton() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="mt-2">
      {status === "authenticated" && (
        <button
          onClick={() => signOut()}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-around gap-2 w-full"
        >
          <FaSignOutAlt size={20} />
          Sign Out
        </button>
      )}
      {status === "unauthenticated" && (
        <button
          onClick={() => signIn()}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-around gap-2 w-full"
        >
          <FaGithub size={20} />
          Sign In
        </button>
      )}
    </div>
  );
}
