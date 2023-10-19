'use client';

import Form from '@/components/Form';
import Calendar from '@/components/Calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Event } from '@/types';
import { useState } from 'react';
import { useAuthContext } from './(app)/context';
import UserHeader from '@/components/User/UserHeader';
export default function AccountPage() {
  const { user } = useAuthContext();

  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex flex-col min-h-screen'>
   
      <header className='container mx-auto space-y-12'>
        <div className='flex items-start justify-start space-y-12'>
          <UserHeader />
        </div>
      </header>

      {/* Dashboard Section */}
      <div className='container mx-auto space-y-12 mt-12'>
        <div className='flex items-center justify-between space-y-12'>
          <Button onClick={() => setOpen(!open)}>Add Event</Button>
        </div>
        <div className='space-y-8 shadow rounded p-4'>
          {open ? (
            <Form setEvents={setEvents} setOpen={setOpen} />
          ) : (
            <Calendar events={events} setOpen={setOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
