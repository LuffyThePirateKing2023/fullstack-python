import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/')
  }
  
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 h-96 bg-white'>
      <h1>Register</h1>
      <p>Create your account. it's free and only takes a minute</p>
        <p>Username:</p>
        <input type="text" placeholder='Username'/>
        <p>Email:</p>
        <input type="email" placeholder='Email Address' />
        <p>Password:</p>
        <input type="password" placeholder='Password' /> <br/>
        <button onClick={handleSubmit}>Register Now</button>
    </div>
  )
}

export default SignUp