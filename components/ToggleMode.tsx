'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={`w-12 h-12 rounded-full  hover:cursor-pointer focus:outline-none 0 flex items-center justify-center ${
        theme === 'light'
          ? 'text-white dark:text-black bg-white  dark:bg-black'
          : 'text-black dark:text-white bg-black dark:bg-white'
      }`}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {theme === 'light' ? <MoonIcon size={24} /> : <SunIcon size={24} />}
    </Button>
  );
}

export default ThemeToggle;
