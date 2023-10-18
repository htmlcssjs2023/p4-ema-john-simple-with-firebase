import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUP = () => {
    return (
        <div className='form-container'>
        <h4 className='form-title'>Sign Up</h4>
        <form className="form">
           <div>
                 <label htmlFor="email">Email</label>
                <input type="email" name="" id="" />
           </div>
           <div>
                 <label htmlFor="email">Password</label>
                <input type="email" name="" id="" />
           </div>
           <div>
                 <label htmlFor="email">Confirm Password</label>
                <input type="email" name="" id="" />
           </div>
           <div>
               <button type="button">Sign Up</button>
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