import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../../index.css';

const Header = () => {
  const navigate = useNavigate();

  const signin = () => {
        navigate('/signUp')
  }
  const home = () => {
    navigate('/')
  }
  return (
    <div className='w-full h-20 px-20 py-5 text-white flex justify-between'>
        <h2 className='font-bold text-2xl' onClick={home}>Ai Blog Generator</h2>
        <ul className='flex justify-between gap-4 cursor-pointer'>
            <li onClick={signin}>Get Started</li>
            <li className='hidden'>Welcome User1</li>
            <li className='hidden'>Logout</li>
        </ul>
    </div>
  )
}

export default Header