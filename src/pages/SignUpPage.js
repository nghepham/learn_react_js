
import React from 'react';
import '../App.css';
import './SignUpPage.css'

function SignUpPage() {
  return (
    <div className={`dark`}>
      <h1 style={{textAlign:'center'}}>Sign up</h1>
      <form id='register-form'>
        <div>
          <p className='input-label'>Full name:</p>
          <input className='input-item' type='text' name="full-name" />
        </div>

        <div>
          <p className='input-label'>Email:</p>
          <input className='input-item' type='email' name="email" />
        </div>
        <div>
          <p className='input-label'>Password:</p>
          <input className='input-item' type='password' name="password" />
        </div>
        <div>
          <p className='input-label'>Confirm password:</p>
          <input className='input-item' type='password' name="confirm-password" />
        </div>
        <div>
          <p className='input-label'>Gender:</p>
          <label className='input-label'><input type='radio' name='gender' value='male'/>Male</label>
          <label className='input-label'><input type='radio' name='gender' value='female' />Female</label>
          <label className='input-label'><input type='radio' name='gender' value='other' />Other</label>
        </div>
        <div>
          <p className='input-label'>Security question:</p>
          <select className='input-item' name="security-question">
            <option value="first-pet">What is your first pet?</option>
            <option value="first-job">What is your first job?</option>
            <option value="nickname">What is your nickname?</option>
          </select>
          <div>
            <textarea className='input-item' name='answer' cols={30} rows={6}>

            </textarea>
          </div>
          <div>
            <p id='terms-checkbox'>
              <input type={'checkbox'} name='terms-condition' value={'accept'} />I agree to accept terms and conditions
            </p>
          </div>
          <div>
            <input type={'button'} value='Register' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
