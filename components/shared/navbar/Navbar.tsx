import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton, SignedIn } from '@clerk/nextjs'
import Theme from '@/components/shared/navbar/Theme'

const Navbar = () => {
  return (
    <nav className='flex-between
     background-light900_dark200 sm:px-12 fixed z-50 w-full gap-5 p-6
     shadow-light-300 '>
        <Link href='/' className='flex items-center gap-1'>
            <Image
                src='/assets/images/site-logo.svg'
                width={23}
                height={23}
                alt='Sochat'
            />
            <p className='h2-bold max-sm:hidden font-spaceGrotesk text-primary-500'>Sochat</p>
        </Link>

        GlobalSearch
        <div className='flex-between gap-5'>
            <Theme />
            <SignedIn>
                <UserButton
                    afterSignOutUrl='/'
                    appearance={{
                      elements: {
                        avatarBox: 'h-10 w-10'
                      },
                      variables: {
                        colorPrimary: '#ff7000'
                      }
                    }}
                />
            </SignedIn>
            MobileNav
        </div>
    </nav>
  )
}

export default Navbar
