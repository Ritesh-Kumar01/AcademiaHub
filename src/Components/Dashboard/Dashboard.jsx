import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Dashboard = () => {
    const { currentUser } = useAuth()
    return (
        <>
        <div className='w-full h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'>
    <div className='text-3xl font-extrabold bg-gray-800 px-8 py-6 rounded-2xl shadow-2xl border border-gray-700 
                    transform hover:scale-105 transition duration-500 ease-in-out'>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}
        </span>
        , you are now logged in.
    </div>
</div>
</>
    )
}

export default Dashboard