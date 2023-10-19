'use client';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import supabase from '@/supabase';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { toast } = useToast();

  const login = async () => {
    if (!email)
      toast({
        title: 'Error',
        description: 'Please enter your email.',
        variant: 'destructive',
      });

    try {
      setLoading(true);
      let { data, error } = await supabase.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='py-10'>
        <div className='container mx-auto text-center'>
          <div className='py-1 px-4 rounded-full shadow dark:shadow-gray-500 text-sm dark:text-white max-w-xs mx-auto'>
            Empower Migraine Research: Track Your Progress
          </div>
          <h1 className='text-4xl lg:text-6xl 2xl:text-7xl font-semibold text-center max-w-3xl mx-auto mt-4 text-[#292929] dark:text-white'>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              M
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              i
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              g
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              i
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              n
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              T
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              c
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              k
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              r
            </motion.span>
          </h1>

          <p className='text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4 italic'>
            Track your migraines and help advance medical research.
          </p>
        </div>
      </header>

      <main className='flex-1 container mx-auto space-y-2'>
        <div className='flex flex-col space-y-4 items-center'>
          <div className='flex space-x-2'>
            {!success && (
              <Input
                type='email'
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-64 shadow-sm dark:shadow-gray-500 text-black dark:text-white'
              />
            )}
            <Button
              variant='outline'
              onClick={login}
              disabled={loading}
              className='text-black dark:text-white'
            >
              {success ? 'Check your email' : 'Login'}
            </Button>
          </div>
          {success && (
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Check your email for a magic link.
            </p>
          )}
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
        </div>
      </footer>
    </div>
  );
}
