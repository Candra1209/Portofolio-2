import React from 'react'
import bgCandra from '../assets/bgCandra.jpg'

function Biodata() {
    return (
        <div style={{ backgroundImage:`url(${bgCandra})` }} className='p-20 my-5'>
            <div className='bg-amber-300 px-10'>
                    <ul className='bg-amber-400 font-poppins text-xl'>
                        <li><span className='font-semibold'>Nama     :</span> Candra Irawan</li>
                        <li><span className='font-semibold'>Birth    :</span> Palangakaraya, 12 Mei 1999</li>
                        <li><span className='font-semibold'>Gander   :</span> Male</li>
                        <li><span className='font-semibold'>Religion :</span> Muslim</li>
                        <li><span className='font-semibold'>Degree   :</span> Computer Science</li>
                    </ul>
            </div>
            <div>
                <div className='flex'>
                    <div className='flex gap-2 bg-teal-four hover:bg-white rounded-full py-1 px-5'>
                        <img src="" alt="icon" />
                        <span><a href="">Contact</a></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Biodata
