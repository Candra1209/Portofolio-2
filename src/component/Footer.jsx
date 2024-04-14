import React from 'react'
import react from '.././assets/react.svg'
import vite from '../assets/vite.svg'
import tailwind from '../assets/tailwindcss.svg'

function Footer() {
    return (
        <div className='md:flex w-full bg-green-950 items-center justify-center gap-3h py-4'>
            <span className='flex  justify-center text-white text-sm font-extralight px-1'>
                Create by candraseka1209@gmail.com
            </span>
            <span className='flex gap-1 justify-center px-1'>
                <img src={vite} width='20px'/>
                <img src={react} width='20px'/>
                <img src={tailwind} width='20px'/>
            </span>
        </div>
    )
}

export default Footer
