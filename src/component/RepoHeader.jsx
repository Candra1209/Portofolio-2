import axios from 'axios'
import React,{useState, useEffect} from 'react'

function RepoHeader() {
    var [user, setUser] = useState(null)

    useEffect(()=>{
        const userGit = async () => {
            axios('https://api.github.com/users/Candra1209')
            .then((res) => {
                setUser(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                alert(err)
            })
        }

        userGit()

    },[])

    return (
        <div className='flex items-center'>
            {user?
            
            <>
            <div>
                <img className='rounded-full' src={user.avatar_url} width='60px' height='60px' alt="foto profil github" />
            </div>
            <div className='px-5'>
                <a href={user.html_url} className='hover:text-emerald-600'>
                    <p className='text-2xl font-poppins font-semibold'>{user.login}</p>
                    <p className='text-sm'>{user.html_url}</p>
                </a>
            </div>
            </>
            
            : <div><p>Loading....</p></div>}
            
        </div>
    )
}

export default RepoHeader
