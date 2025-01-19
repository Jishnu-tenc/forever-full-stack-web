
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import axios from 'axios';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const { setToken, navigate } = useContext(ShopContext);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        console.log(response.data);
        // Handle response (e.g., set token or navigate)
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        console.log(response.data);
        setToken(response.data.token); // Save token
        navigate('/dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during the request.");
    }
  };

  const handleStateChange = (newState) => {
    setCurrentState(newState);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer font-bold'>Forgot your password?</p>
          {currentState === 'Login' ? 
            <p onClick={() => handleStateChange('Sign Up')} className='cursor-pointer bg-black text-white w-[30%] border rounded-lg p-1 pl-3 text-sm'>Create account</p> : 
            <p onClick={() => handleStateChange('Login')} className='cursor-pointer bg-black text-white border rounded-lg p-3 pl-3 text-sm'>Login Here</p>}
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Login;

