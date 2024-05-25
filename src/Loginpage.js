
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'superadmin' && password === 'password') {
      
      navigate('/Header', { username, password });
    } else {
      alert('Invalid username or password');
    }
  };



  return (
    <div className='main class bg-[#eff1f5] text-[#01c1e21] flex  justify-center items-center h-[100vh] w-[100%]'>
     <div className="left">
      <h1 className='text-blue-600  font-bold text-[4rem]'>
        facebook
      </h1>
      <h3 className=' text-[1.8rem] '>Connect with friends and the world  <br/> around you on Facebook. </h3>
     </div>
     <div className="right bg-white w-[300px] h-[220px] ml-[8rem] flex flex-col rounded-xl " >
     <form onSubmit={handleSubmit} className='flex flex-col'>
      <input type='text' placeholder='Email or phone number' className='border-2   p-4 mt-4 mx-4 rounded-xl text-[1.15rem] ' onChange={handleUsernameChange} />
      <input type='password' placeholder='Password' className='border-2 p-4 mt-2 mx-4 rounded-xl text-[1.15rem]' onChange={handlePasswordChange}/>
      <button className=' bg-blue-600 p-4 mt-4 mx-4 text-white text-[1.20rem]   font-bold rounded-xl' >Log In</button>
      
      <span className=' flex justify-center text-blue-400 mt-2 hover:underline'> Forgot password?</span>
      <hr className='mt-3'></hr>
      <button className=' flex justify-center  ml-[8rem] bg-[#41b631] p-4 mt-7 mx-12  text-white w-[150px]  rounded-xl font-semibold text-[1.15rem]' > Create new account </button>
      </form>
      <button className='bg-transparent text-black-500 mt-12 mx-17 text-sm'> <span className= 'font-bold'>Create a Page </span> for a celebrity, brand, or business.</button>
     
      </div>
     
    </div >
  )
}

export default Loginpage