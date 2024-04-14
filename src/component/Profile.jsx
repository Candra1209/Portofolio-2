import React from 'react'
import me from '../assets/candra.jpg'

function Profile() {
    return (
        <div className='md:flex justify-center w-full gap-7 lg:gap-14 py-32 px-10 sm:px-20 bg-gradient-to-tr from-emerald-950 to-emerald-800'>
            <div className='w-full md:w-72 flex p-5 md:p-0 items-center justify-center'>
                    <img src={me} alt="" className='w-72 md:w-full ring-4 ring-emerald-600 ring-offset-4 ring-offset-emerald-950 rounded-full'></img>
            </div> 
            <div className='md:w-3/5 h-auto flex items-center'>
                <div className='bg-emerald-600 rounded-large p-4 '>
                    <span className='text-justify font-poppins font-medium text-white'>
                        My name Candra Irawan, im from South Borneo Indonesia. this is the second time im using react there lot things to learn
                        like react-DOM, Hook, costum Hook, Server side rendering (SSR), router and many more, but im feel proud that  i can make this site
                        without looking to turtorial and using basic stuff like Component and props. also i really like game dev so some time i try game programming, still dont know what kind a engine i choose
                        i want use godot, but it not popular in Indonesia, and my crappy laptop barely open unity engine.
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
