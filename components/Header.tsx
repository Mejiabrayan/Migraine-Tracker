'use client';
import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ToggleMode';
import AvatarComponent from './Avatar';
import { useAuthContext } from '@/app/(app)/context';
import { usePathname } from 'next/navigation';
import UserHeader from './User/UserHeader';
import { BookMarked, Home } from 'lucide-react';

const Header = () => {
  const { user } = useAuthContext();
  const pathName = usePathname();

  return (
    <header>
      <div className='container mx-auto p-4'>
        <nav className='flex items-center justify-between'>
          <Link href='/'>
            <div className='flex items-center space-x-2'>
              <BookMarked size={20} className='text-black dark:text-white' />
              <span className='text-base md:text-base font-bold text-gray-800 dark:text-white'>
                Migraine Tracker
              </span>
            </div>
          </Link>
          <ul className='flex items-center space-x-4 rounded-full shadow px-3 dark:shadow-gray-500'>
            <li>
              <Link
                href='/'
                className={`${
                  pathName === '/'
                    ? 'text-blue-500'
                    : 'text-gray-600 dark:text-white'
                } hover:text-blue-500`}
              >
                <Home size={20} />
              </Link>
            </li>

            <li>
              <ThemeToggle />
            </li>
            {user && (
              <li className='ml-4'>
                <UserHeader />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
