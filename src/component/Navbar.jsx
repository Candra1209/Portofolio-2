import React from 'react'
import DropdownLink from './DropdownLink'

function Navbar() {
    return (
    <div>
        <div className='w-full flex justify-center '>
            <div className='w-11/12 rounded-full mt-3 backdrop-blur-md'>
            <nav className='w-full h-14 md:h-16 lg:h-20 flex justify-between px-5 md:px-7 lg:px-10 py-2'>
                <div className='flex items-center lg:flex-1'>
                <a href="" className=''>
                    <span className='px-5 py-2 text-2xl md:text-3xl lg:text-4xl font-satisfy font-extrabold text-emerald-500 hover:rounded-full hover:underline'>Portofolio</span>
                </a>
                </div>
                <div className='w-5/12 hidden md:flex lg:flex items-center justify-around gap-3'>
                <a className='px-5 py-2 text-base md:text-lg lg:text-2xl font-satisfy font-bold text-emerald-500 hover:rounded-full hover:ring-2 ring-emerald-500 ' href="">Project</a>
                <a className='px-5 py-2 text-base md:text-lg lg:text-2xl font-satisfy font-bold text-emerald-500 hover:rounded-full hover:ring-2 ring-emerald-500 ' href="">Contact</a>
                <a className='px-5 py-2 text-base md:text-lg lg:text-2xl font-satisfy font-bold text-emerald-500 hover:rounded-full hover:ring-2 ring-emerald-500 text-nowrap ' href="">About me</a>
                </div>

                <div className='flex items-center md:hidden lg:hidden'>
                    <DropdownLink/>
                </div>

            </nav>
            </div>
        </div>
    </div>
    )
}

export default Navbar
