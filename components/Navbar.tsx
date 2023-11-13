import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={'/'} className='flex items-center gap-1'>
          <Image
            src={'/assets/icons/logo.svg'}
            height={27}
            width={27}
            alt='logo'
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
