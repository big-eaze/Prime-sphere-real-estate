"use client";
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import MobileNav from './MobileNav';

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      {openMenu && <MobileNav />}
      <div className='relative lg:hidden flex items-center justify-center w-full py-4'>
        <Menu onClick={() => setOpenMenu(true)} className='w-5 h-5 text-[#A0552D] absolute left-5 top-5' />
        <h1 className='text-xl '>Prime Sphere</h1>
      </div>
    </>
  )
}

export default Header