import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeToggle from './ToggleMode';
import Link from 'next/link';

const Header = () => {
  return (
    <Card className='flex items-center justify-between p-1'>
      <CardHeader>
        <CardTitle className='text-xl md:text-2xl font-bold text-gray-800 dark:text-white'>
          <Link href='/'>Migraine Tracker</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex items-center space-x-4'>
        <Link
          href='/'
          className='text-gray-600 dark:text-white hover:text-blue-500'
        >
          Home
        </Link>
        <Link
          href='/account'
          className='text-gray-600 dark:text-white hover:text-blue-500'
        >
          Account
        </Link>
        <Link
          href='/contact'
          className='text-gray-600 dark:text-white hover:text-blue-500'
        >
          Contact
        </Link>
        <ThemeToggle />
      </CardContent>
    </Card>
  );
};

export default Header;
