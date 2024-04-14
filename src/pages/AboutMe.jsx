import React from 'react'
import Profile from '../component/Profile'
import Biodata from '../component/Biodata'


function AboutMe() {
    return (
        <div className='flex flex-col gap-4 pb-10'>
            <div className='pt-10 text-center'>
                <span className='text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold'>
                    About Me!!
                </span>
            </div>
            
            <div>
                <Profile/>
            </div>

            <div> 
                <Biodata/>
            </div>

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


        </div>
    )
}

export default AboutMe
