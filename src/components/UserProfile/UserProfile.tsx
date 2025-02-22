import { TiUser } from "react-icons/ti";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const UserProfile = () => {
  return (
    <div className="rounded-md border border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2 px-2 py-1">
      <p>You are not logged in!</p>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <TiUser size={24} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-ecBackgroundBody dark:bg-ecBackgroundBodyDark rounded-md z-[5000] w-[10rem] p-2 shadow right-0 mt-1"
        >
          <ThemeToggle />
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
