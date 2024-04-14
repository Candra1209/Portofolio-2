import React from 'react'
import Profile from '../component/Profile'
import Biodata from '../component/Biodata'
import RiwayatHidup from '../component/RiwayatHidup'


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
                <RiwayatHidup/>
            </div>

        </div>
    )
}

export default AboutMe
