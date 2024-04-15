import React from 'react'
import { Link } from 'react-router-dom'
import leaf_1 from '../assets/leaf_1.svg'
import leaf_2 from '../assets/leaf_2.svg'
import leaf_3 from '../assets/leaf_3.svg'

function ErrorPage() {
    return (
        <>
            <div className=' w-lvw h-lvh flex justify-center items-center bg-emerald-100'>
                <img src={leaf_1} alt="Leaf Icon" className='invisible md:visible absolute w-72 top-10 -left-28 rotate-45' />
                <img src={leaf_2} alt="Leaf Icon" className='invisible md:visible absolute w-72 bottom-0 right-0' />
                <img src={leaf_3} alt="Leaf Icon" className='absolute w-96' />

                <div className='
                relative w-fit h-fit
                px-5
                flex flex-col items-center
                '>
                    <h1 className='font-black font-satisfy text-7xl sm:text-9xl text-emerald-950'>
                        404
                    </h1>
                    <div className='
                    text-center text-xs text-emerald-950 sm:text-base
                    font-poppins font-semibold
                    '>
                        <p>There's something wrong, i can found the page</p>
                        <p>Maybe there no such page, or even worst it still under develop</p>
                    </div>
                    <div className='my-5'>
                        <Link to="/Portofolio-2" 
                        className='
                        px-5 py-2
                        ring-2 ring-emerald-950 rounded-full hover:ring-0
                        text-base text-emerald-950 hover:text-white sm:text-lg
                        font-poppins font-medium
                        hover:bg-emerald-950
                        '
                        >
                            <span>
                                Back to home
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default ErrorPage
