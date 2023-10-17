import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className=' p-4'>
        <div className='container mx-auto'>
          <div className='text-center py-10'>
            <span className='py-4 px-4 rounded-full shadow dark:shadow-gray-500 text-sm'>
              Track your migraines, help doctors find a cure.
            </span>
          </div>
          <h1 className='tracking-tight font-heading text-[#292929] dark:text-white text-4xl lg:text-6xl 2xl:text-7xl font-semibold text-center max-w-3xl mx-auto'>
            Migraine Tracker App
          </h1>
          <p className='text-center text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
            Track your migraines, help doctors find a cure.
          </p>
        </div>
      </header>

      <main className='flex-1 container mx-auto py-8'>
        <div className='flex flex-col space-y-4 items-center'>
          <div className='flex space-x-2'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='w-full max-w-sm'
            />
            <Button variant={'default'} className='text-center'>
              Get Started
            </Button>
          </div>
        </div>

        <div className='flex flex-col items-center mt-8'>
          {/* Add Hero image below */}
          <Image
            src='/Doctors-pana.svg'
            width={500}
            height={500}
            alt='Doctor'
            priority
          />
        </div>
      </main>

      <footer className=' p-4'>
        <div className='container mx-auto text-center'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Migraine Tracker. All rights
          </p>
          {/* <div className='mt-4 flex justify-center space-x-4'>
            <Link
              href='/privacy'
              className='text-gray-600 dark:text-gray-400 hover:text-blue-500'
            >
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
