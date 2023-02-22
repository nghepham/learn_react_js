
import React from 'react';
import '../App.css';
import './SignUpPage.css'
import logo from '../assets/logo.svg';

function SignUpPage() {
  return (
    <div id={`sign-up-container`}>
      <div className='container'>
        <div className='title-center'>Register</div>
        <div id='login-social'>
          <div>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-github"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
        <form id='register-form'>
          <div className='input-container'>
            <input className='input-item' placeholder='Username' type='text' name="username" required />
          </div>
          <div className='input-container'>
            <input className='input-item' placeholder='Email' type='email' name="email" required />
          </div>
          <div className='input-container'>
            <input className='input-item' placeholder='Password' type='password' name="password" required />
          </div>
          <div className='input-container'>
            <input className='input-item' type='password' placeholder='Confirm Password' name="confirm-password" required />
          </div>
          <div id='div-btn'>
            <input id='btn-register' type={'button'} value='Register' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
