import React from 'react'
import bgCandra from '../assets/bgCandra.jpg'


function Biodata() {
    return (
        /*style={{ backgroundImage:`url(${bgCandra})` }} className='p-20 my-5 bg-contain bg-no-repeat bg-left-top' */
        
        <div className='h-screen'>
            <div className='relative h-full'>
                <img 
                className='absolute top-0 right-0 h-full object-cover'
                src={bgCandra} alt="background" />

                <div className='absolute bg-gradient-to-r from-emerald-950 from-20% md:from-70% to-transparent w-full h-full'>
                    
                </div>
                <div className='flex items-center h-full'>
                    <div className='relative flex flex-col gap-5 justify-center items-center md:w-3/4 h-full'>
                        <div className='w-10/12 sm:w-3/5 lg:w-2/5'>
                                <span className='text-2xl md:text-4xl text-white font-satisfy'>Profil</span>
                                <ul className='font-poppins text-sm sm:text-lg md:text-xl  text-white'>
                                    <li><span className='font-semibold'>Nama     :</span> Candra Irawan</li>
                                    <li><span className='font-semibold'>Birth    :</span> Palangakaraya, 12 Mei 1999</li>
                                    <li><span className='font-semibold'>Gander   :</span> Male</li>
                                    <li><span className='font-semibold'>Religion :</span> Muslim</li>
                                    <li><span className='font-semibold'>Degree   :</span> Computer Science</li>
                                </ul>
                        </div>
                        <div className='w-10/12 sm:w-3/5 lg:w-2/5 pt-5'>
                            <span className='text-2xl md:text-4xl text-white font-satisfy'>
                                Contacts
                            </span>
                            <div className='flex flex-wrap gap-2'>
                                
                                <a href=" https://wa.me/6285753014487" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700 rounded-full py-1 px-5'>
                                        <span>+6295753014487</span>
                                    </div>
                                </a>
                                <a href="https://web.facebook.com/people/Candra-Irawan/pfbid0L4SK4vHXEuDaTFLfSnJixj52zvZaHSy8Z3vVor8e2smtL4jd98zxgCerpdyK8VHol/" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700 rounded-full py-1 px-5'>
                                        <span>Facebook</span>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/candra.ze/" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700 rounded-full py-1 px-5'>
                                        <span>Instagram</span>
                                    </div>
                                </a>
                                <a href="www.linkedin.com/in/candra-irawan-b6854823a" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700 rounded-full py-1 px-5'>
                                        <span>Linkdln</span>
                                    </div>
                                </a>
                                <a href="https://github.com/Candra1209/" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700 rounded-full py-1 px-5'>
                                        <span>Github</span>
                                    </div>
                                </a>
                                <a href="https://rinmaa.itch.io/" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700  rounded-full py-1 px-5'>
                                        <span>Itch.io</span>
                                    </div>
                                </a>
                                <a href="https://replit.com/@candraseka1209" target="_blank" rel="noopener noreferrer">
                                    <div className='font-poppins text-sm flex text-white font-light gap-2 bg-emerald-700 hover:bg-white hover:text-emerald-700  rounded-full py-1 px-5'>
                                        <span>Replit</span>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biodata
