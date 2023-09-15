import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const signupApi = async () => {
    const res = await axios.post("http://localhost:5000/api/signup", {
      email: user.email,
      fullName: user.fullName,
      userName: user.userName,
      password: user.password
    }).catch((err) => {
      console.log(err);
    })

    const data = await res.data;

    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signupApi().then(()=>history("/login"));
    // console.log(user);
  }

  return (
    <>
      <main id='auth'>
        <div className='sign-up-box'>
          <h2 className='instagram-font'>Instagram</h2>
          <p>
            Sign up to see photos and videos from your friends.
          </p>
          <button className='signup-btn'>Log in with facebook</button>
          <h6 className='text-center my-3'>OR</h6>
          <form onSubmit={handleSubmit} >
            <input placeholder='Mobile Number or Email' name='email' value={user.email} onChange={handleChange} type='email' />
            <input placeholder='Full Name' name='fullName' value={user.fullName} onChange={handleChange} type='text' />
            <input placeholder='Username' name='userName' value={user.userName} onChange={handleChange} type='text' />
            <input placeholder='password' name='password' value={user.password} onChange={handleChange} type='password' />
            <button className='signup-btn mt-4' type='submit'>Sign up</button>
          </form>
          <div className='mt-3'>
            <p>Have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUp