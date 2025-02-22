"use client";
import { TiUser } from "react-icons/ti";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { UserButton } from "../UserButton/UserButton";
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="rounded-md border border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2 px-2 py-1">
      {status !== "authenticated" ? (
        <p>You are not logged in!</p>
      ) : (
        <p>Welcome {session.user?.name}</p>
      )}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {status !== "authenticated" ? (
            <TiUser size={24} />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={session?.user?.image as string}
              alt="userimg"
              height={24}
              width={24}
              className="rounded-full"
            />
          )}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark rounded-md z-[5000] w-[10rem] p-2 shadow right-0 mt-1"
        >
          <ThemeToggle />
          <UserButton />
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
