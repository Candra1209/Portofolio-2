import React from 'react'

function RepoCard({repo}) {
    return (
        <a href={repo.url}>
        <div className='
        flex flex-col px-3 py-2 rounded-large justify-between
        hover:bg-gray-300
        lg:flex-row
        
        '>
            <div>
                <p className='text-lg font-poppins font-bold'>{repo.name}</p>
                <p className='text-sm text-gray-400 hover:text-gray-800 line-clamp-2'>{repo.desc}</p>

            </div>
            <div className='py-3 lg:py-0'>
                <span className='text-xs font-bold text-nowrap text-white bg-gray-600 rounded-full px-2 py-1'>{repo.tipe}</span>
            </div>
        </div>
        </a>
    )
}

export default RepoCard
