import React from 'react'
import back from '../assets/gambar.jpg'

function RiwayatHidup() {
    return (

        <>
            <div className='min-h-screen relative bg-amber-100'>
                <img
                className='absolute h-full object-cover brightness-50'
                src={back} alt="back" />
                <div className='absolute bg-gradient-to-l from-emerald-950 from-20% md:from-60% to-transparent w-full h-full'></div>

                
                <div className='
                relative 
                min-h-screen 
                flex flex-col justify-center items-center gap-5
                py-32 px-10 sm:px-16 md:px-36 lg:px-48
                text-justify
                '>
 
                    <div className='
                    w-full  
                    sm:pl-24 md:pl-48 lg:pl-72
                    font-poppins font-medium
                    text-white text-sm md:text-lg lg:text-xl
                    '>
                        Since Highschool i have been interested in computer, like video editing and design. after that
                        take a step into computer science degree in Lambung Mangkurat Univercity. in collage i start learning 
                        programing basic using several language like Pascal, C, C++, java and PHP. in my senior year
                        i try machine learning for my research, more specifically Deep Learning with MobileNetV3 Model using python and tensorflow keras.
                    </div>
                    <div className='
                    w-full 
                    sm:pl-24 md:pl-48 lg:pl-72
                    font-poppins font-medium
                    text-white text-sm md:text-lg lg:text-xl
                    '>
                        after graduated in collage i realize there lot thing that has not been taught like some concept of backend, frontend, Agile, DevOps, CI/CD, Git, Design architectur
                        and more. i fell shame cuz i think i have base knowledge after graduate and in reality what i know is garbage.
                        that why now im try learn and try many things, and start with frontend with react + tailwinds is good start.
                    </div>

                    <div className='text-center py-5'>
                            <span className='
                            font-poppins font-semibold
                            text-xl text-white underline underline-offset-4
                            '>
                                &lt;&lt; Slide Me
                            </span>
                    </div>

                </div>

            </div>
        </>

        /*<div>
            <div> 
                <div className='w-auto flex mx-10 md:ml-10 md:mr-40  lg:ml-20 lg:mr-80'>
                    Since Highschool i have been interested in computer, like video editing and design. after that
                    take a step into computer science degree in Lambung Mangkurat Univercity. in collage i start learning 
                    programing basic using several language like Pascal, C, C++, java and PHP. in my senior year
                    i try machine learning for my research, more specifically Deep Learning with MobileNetV3 Model using python and tensorflow keras.
                </div>
            </div>

            <div> 
                <div className='w-auto flex mx-10 md:ml-40 md:mr-10  lg:ml-80 lg:mr-20'>
                    after graduated in collage i realize there lot thing that has not been taught like some concept of backend, frontend, Agile, DevOps, CI/CD, Git, Design architectur
                    and more. i fell shame cuz i think i have base knowledge after graduate and in reality what i know is garbage.

                    that why now im try learn and try many things, and start with frontend with react + tailwinds is good start.
                </div>
            </div>
        </div>*/
    )
}

export default RiwayatHidup
