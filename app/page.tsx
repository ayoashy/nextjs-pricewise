import FetchComponent from '@/components/FetchComponent';
import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart shopping start here:
              <Image
                src={'/assets/icons/arrow-right.svg'}
                alt='arrow-right'
                width={16}
                height={16}
              />
            </p>
            <h1 className='head-text'>
              Unleash the Power of
              <span className='text-primary'> PriceWise</span>
            </h1>
            <p className='mt-6'>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        {/* <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {[1, 2, 3, 4].map((product) => (
            <p key={product}>{product}</p>
          ))}
        </div> */}
        <h1>User navigation</h1>
        <Link href={'/fetch'} className='bg-purple-50 pt-3 px-6'>
          Navigate to fetch
        </Link>
      </section>
    </>
  );
};

export default page;
