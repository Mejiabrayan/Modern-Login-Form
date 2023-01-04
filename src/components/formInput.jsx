import React from 'react';
import googleIcon from '../images/google.png';
import '../index.css'

export default function FormInput() {
  return (
<div className='p-4 m-8 flex-grow'>
  <form className='bg-white p-6'>
    <h2 className='text-2xl mt-4 md:mt-8' style={{fontFamily: 'Oswald'}}>Create an account</h2>
    <p className='text-gray-500 mb-4'>
      Let's get started with your 30 day free trial.
    </p>
    <div className='mb-4'>
      <input
        className='w-full py-2 bg-transparent border-b-2 border-grey-100 focus:outline-none focus:shadow-outline'
        type='text'
        id='name'
        placeholder='Name'
      />
    </div>
    <div className='mb-4'>
      <input
        className='w-full py-2 bg-transparent border-b-2 border-grey-100 focus:outline-none focus:shadow-outline'
        type='text'
        id='password'
        placeholder='Password'
      />
    </div>

    <div className='mb-4'>
      <input
        className='w-full py-2 bg-transparent border-b-2 border-grey-100 focus:outline-none focus:shadow-outline'
        type='email'
        id='email'
        placeholder='Email'
      />
    </div>

    <div className='text-center flex'>
      <button
        className='px-4 py-2 rounded-lg text-white bg-gray-800 hover:bg-grey-900 focus:outline-none focus:shadow-outline flex-shrink-0 mx-2'
        type='submit'
      >
        Create an account
      </button>
      <button
        className='px-4 py-2 rounded-lg text-black bg-white-500 focus:outline-thin focus:shadow-outline border-2 border-grey flex-shrink-0 mx-2'
        type='submit'
      >
        <div className='flex '>
          <img src={googleIcon} alt='google icon' className='pr-2' />
          <span>Sign up with Google</span>
        </div>
      </button>
    </div>
    <div className='text-center mt-4'>
      <p className='text-gray-500'>
        Already have an account?{' '}
        <a href='#' className='text-black underline'>
            Sign in
        </a>
        </p>
    </div>
    </form>
</div>  

  );
}