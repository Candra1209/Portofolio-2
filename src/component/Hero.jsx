import React from 'react'
import clover from '../assets/clover.jpg'

function Hero() {
    return (
        <>
        <div className='bg-gradient-to-b from-emerald-950 from-10% to-emerald-700'>
            <div className=' h-lvh '>
            <div className=''>
                <div className=' h-svh flex justify-center items-center'>

                    <div className='
                    absolute top-0 right-0
                    hidden lg:flex justify-end
                    '>
                        <img loading='lazy' src={clover} alt="" className='w-auto h-lvh rounded-l-extra'/>
                    </div>

                    <div className=' relative lg:w-9/12 text-center lg:text-left'>
                        <div>
                            <span className='text-lg md:text-2xl lg:text-4xl italic text-white font-satisfy'>Olla!! </span> 
                            <span className='text-lg md:text-2xl lg:text-4xl text-emerald-500 font-satisfy'>me llamo es</span>
                        </div>
                        <h1 className='text-5xl md:text-6xl lg:text-8xl font-extrabold font-racingone'>
                            <span className='text-emerald-500'>Candra </span>
                            <span className='text-white'>Irawan </span>
                        </h1>
                        <div className=' py-4 px-5 sm:px-14 md:px-20 lg:pl-10 lg:pr-56'>
                            <p className='font-poppins text-xs md:text-base lg:text-xl text-white'>
                                This my sacond fortopolio where i create using react and tailwind,
                                i dont belive how easy to use tailwind, and it really suit me. 
                                i love how i dont need to changing between css and jsx to make style
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
            </div>
        </div>
        <div>
        </div>
        </>
    )
}

export default Hero
