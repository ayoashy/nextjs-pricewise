import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const Navbar = () => {
  return (
    <header className='w-full left-0 right-0 bg-pink-300 sticky top-0 z-20'>
      <nav className='nav'>
        <Link href={'/'} className='flex items-center gap-1'>
          <Image
            src={'/assets/icons/logo.svg'}
            height={27}
            width={27}
            alt='logo'
          />
          <p className='nav-logo'>
            Price<span className='text-primary'>wise</span>
          </p>
        </Link>

        <div className='flex items-center gap-5'>
          {navIcons.map((icon) => (
            <Image
              alt={icon.alt}
              src={icon.src}
              key={icon.alt}
              width={28}
              height={28}
              className='object-contain'
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
