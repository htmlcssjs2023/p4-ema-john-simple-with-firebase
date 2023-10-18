import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUP = () => {
    const [error, setError] = useState('');
    const handleSignUp = (event)=>{
        // prevent page refresh
        event.preventDefault();

        // collect form data 
        const form = event.target;
        // console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        // Compare two password that user provided within password and confirm field
        if(password !== confirm){
            setError('Your password is not match');
        }
        else if(password.length < 6){
            setError('Password should be at least 6 character');
        }   
       
    }
    
    return (
        <div className='form-container'>
        <h4 className='form-title'>Sign Up</h4>
        <form onSubmit={handleSignUp} className="form">
            <p className='text-error'>{error}</p>
           <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required/>
           </div>
           <div>
                 <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
           </div>
           <div>
                 <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="confirm" />
           </div>
           <div>
               <input type="submit" value="Sign Up" />
           </div>
           <div className='link-button'>
                <span style={{marginRight:"4px"}}>Already have an account?</span>
                <Link to="/login" style={{color:"#F90"}}>Login</Link>
           </div>
        </form>
        
    </div>
    );
};

export default SignUP;