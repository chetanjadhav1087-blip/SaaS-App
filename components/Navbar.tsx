import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import {  Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image 
                src='/images/AI_Tutor_Logo.png' 
                alt='logo' 
                width={64} 
                height={44} 
            />
        </div>
      </Link>
      <div className='flex item-center gap-8'>
        <NavItems/>
        <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
      </div>
    </nav>
  )
}

export default Navbar
