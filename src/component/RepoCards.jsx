import RepoCard from './RepoCard'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RepoHeader from './RepoHeader';

function RepoCards() {
    var [dataFetch, setDataFetch] = useState(null);


    useEffect(() => {
        
        const fetchData = async () => {
            axios('https://api.github.com/users/Candra1209/repos')
            .then((res) => {
                setDataFetch(res.data)
            })
            .catch((err) => {
            })
        }
        
        fetchData()
        
    },[])

    return (
        <div className='
        py-5
        lg:px-32 md:px-20 sm:px-10 px-5
        '>
            <div className='
            bg-gray-200 border border-gray-300 rounded-large drop-shadow-xl
            '>
                <div className='border-b border-gray-300 py-5 px-5'>
                    <RepoHeader/>
                </div>
                <div className='
                px-4 py-4
                flex gap-2 flex-col
                md:grid md:grid-cols-2 md:grid-flow-row md:gap-4 md:flex-wrap
                '
                >
                    {dataFetch?
                    dataFetch.map((repo) => {
                        return(
                        <RepoCard key={repo.id}
                        repo={{id : repo.id, name : repo.name, url : repo.html_url, tipe : repo.language, desc : repo.description}}
                        />
                        )
                        
                    })
                    : console.log("Loading......")}
                    
                </div>
            </div>
        </div>
    )
}

export default RepoCards
