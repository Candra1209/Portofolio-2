import React, { useEffect, useState } from 'react'
import RepoCards from '../component/RepoCards';

function ViewProject() {


    return (
        <div>
            <div className='pt-10 text-center'>
                <span className='text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold'>
                    Github Repository
                </span>
            </div>
            <RepoCards/>
        </div>
    )
}

export default ViewProject
