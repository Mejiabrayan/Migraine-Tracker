import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className=' py-6'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Your Startup. All rights reserved.
        </p>
        <div className='mt-4 flex justify-center space-x-4'>
          <a
            href='/privacy'
            className='text-gray-600 dark:text-gray-400 hover:text-blue-500'
          >
            Privacy Policy
          </a>
          <a
            href='/terms'
            className='text-gray-600 dark:text-gray-400 hover:text-blue-500'
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
