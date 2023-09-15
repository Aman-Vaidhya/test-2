import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const loginApi = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email: user.email,
        password: user.password,
      });
      
      const data = res.data;
      // console.log(data);
      if (data.success) {
        // Login was successful, you can redirect or perform other actions here
        console.log('Login successful');

        history('/'); 
      } else {
        console.log('Login failed');
      }
    } catch (err) {
      console.error('Error while logging in:', err);
      // Handle other types of errors here
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi();
  };

  return (
    <main id='auth'>
      <div className='sign-up-box'>
        <h2 className='instagram-font'>Instagram</h2>
        <p>Sign up to see photos and videos from your friends.</p>

        <form onSubmit={handleSubmit}>
          <input
            placeholder='Mobile Number or Email'
            name='email'
            value={user.email}
            onChange={handleChange}
            type='email'
          />
          <input
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleChange}
            type='password'
          />
          <button className='signup-btn mt-4' type='submit'>
            Log in
          </button>
        </form>
        <h6 className='text-center my-3'>OR</h6>
        <p style={{ fontSize: '14px', color: '#385185' }}>Log in with Facebook</p>
        <p style={{ fontSize: '12px', color: '#385185' }}>Forgot password?</p>
        <div>
          <p>
            Don't have an account? <Link to='/sign-up'>Sign Up</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
