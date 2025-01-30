import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from './../../firebase/auth';
import { useAuth } from "./../../contexts/authContext/index.jsx";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password).catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
      {userLoggedIn && <Navigate to={'/dashboard'} replace={true} />}
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
        <h3 className="text-center text-2xl font-bold text-white mb-6">Welcome Back</h3>
        {errorMessage && <p className='text-red-500 text-sm text-center'>{errorMessage}</p>}
        <form onSubmit={onSubmit} className="space-y-4">
          
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input type="email"
              placeholder='Email Address'
              required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Password</label>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
          </div>
          <button type="submit" disabled={isSigningIn}
            className={`w-full py-2 text-white font-semibold rounded-lg transition-all ${isSigningIn ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className='flex items-center my-4'>
          <div className='flex-grow border-t border-gray-600'></div>
          <span className='mx-4 text-gray-400 text-sm'>OR</span>
          <div className='flex-grow border-t border-gray-600'></div>
        </div>
        <button disabled={isSigningIn} onClick={onGoogleSignIn}
          className="w-full flex items-center justify-center gap-x-3 py-2 border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_40)">
              <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
              <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
              <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
              <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
            </g>
          </svg>
          {isSigningIn ? 'Signing In...' : 'Continue with Google'}
        </button>
        <p className="text-center text-sm mt-4">Don't have an account? <Link to='/register' className="text-blue-400 hover:underline">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;