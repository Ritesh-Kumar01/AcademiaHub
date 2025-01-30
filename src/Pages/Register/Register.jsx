import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import {useAuth} from "./../../contexts/authContext/index"
import { doCreateUserWithEmailAndPassword } from "./../../firebase/auth"
const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/dashboard'} replace={true} />)}

            <main className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
                        {userLoggedIn && <Navigate to={'/dashboard'} replace={true} />}
                        <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
                            <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-white">Create a New Account</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-4">
                        
                        <div>
                            <label className="text-sm font-bold">Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                placeholder='Email Address'
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>                

                        <div>
                            <label className="text-sm font-bold">Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                placeholder='Password'
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-bold">Confirm Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                placeholder='Confirm Password'
                                value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-500 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Already have an account? {' '}
                            <Link to={'/login'} className="text-indigo-400 hover:underline font-bold">Sign in</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register;