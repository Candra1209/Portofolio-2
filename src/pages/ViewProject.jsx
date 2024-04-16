import React, { useEffect, useState } from 'react'
import RepoCards from '../component/RepoCards';
import RiwayatCarosel from '../component/RiwayatCarosel';

function ViewProject() {


    return (
        <div className='pt-40 pb-20'>
            <div className='text-center'>
                <span className='text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold'>
                    Github Repository
                </span>
            </div>
            <RepoCards/>
        </div>
    )
}

export default ViewProject
