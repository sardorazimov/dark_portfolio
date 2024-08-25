import LogoImg from '@/public/assets/images/logosaas.png'
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';


export const Navbar = () => {
  return (
    <header className='border-b'>
    <div className="container ">
      <div className=' flex justify-between'>
          <div className='relative'>
          <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient:]'></div>
           <Image 
            src={LogoImg}
            alt='Logo' 
            className='h-14 w-14 relative' 
            />
          </div>    {/* Menu Set JavaScrpit */}
          <div className='border-b border-white border-opacity-30 w-10 h-10 justify-center items-center rounded-lg hidden'>
              <Menu />
          </div>
          <nav className='gap-6 items-center hidden sm:flex'>
            <Link href={'/'} className='text-opacity-60 text-muted dark:hover:text-white transition hover:text-opacity-100 '>Upadate</Link>
            <Link href={'/'} className='text-opacity-60 dark:hover:text-white transition hover:text-opacity-100 '>Upadate</Link>
            <Link href={'/'} className='text-opacity-60 dark:hover:text-white transition hover:text-opacity-100 '>Upadate</Link>
            <Link href={'/'} className='text-opacity-60 dark:hover:text-white transition hover:text-opacity-100 '>Upadate</Link>
           
          </nav>
          <Button className='my-2 items-center inline-flex '>
              Get Started
           </Button>
      </div>
    </div>
    </header>
  
  )
};
