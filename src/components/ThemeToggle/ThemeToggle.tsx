'use client';

import { useEffect, useState } from 'react';
import { TbSunset2, TbHazeMoon } from "react-icons/tb";


export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? <TbSunset2 className="w-6 h-6 text-yellow-500" /> : <TbHazeMoon className="w-6 h-6 text-gray-900" />}
    </button>
  );
}
