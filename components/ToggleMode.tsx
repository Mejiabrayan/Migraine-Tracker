'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import {BsMoon, BsSun} from 'react-icons/bs';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={`w-12 h-12 rounded-full focus:outline-none flex items-center justify-center bg-transparent ${
        theme === 'light' 
      }`}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {theme === 'light' ? (
        <BsMoon size={24} className="text-black dark:text-white" />
      ) : (
        <BsSun size={24} className="text-white dark:text-black" />
      )}
    </Button>
  );
}

export default ThemeToggle;




