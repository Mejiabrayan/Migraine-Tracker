// @ts-nocheck
'use client';

import * as React from 'react';
import AvatarComponent from '../Avatar';
import { useAuthContext } from '@/app/(app)/context';
import { useRouter } from 'next/navigation';
import supabase from '@/supabase';
import { Button } from '@/components/ui/button';

export default function UserHeader() {
  const router = useRouter();
  const { user } = useAuthContext();
  const logout = () => {
    supabase.auth.signOut();
    router.push('/home');
  };
  return (
    <div className='flex items-center space-x-4'>
      {user && (
        <div className='flex items-center space-x-4'>
         
          <div>
            <h2 className='text-2xl font-bold dark:text-white'>{user.email}</h2>
            <Button
              variant='default'
              onClick={logout}
              className='px-4 py-2 mt-2'
            >
              Signout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
