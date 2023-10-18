import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h4 className='form-title'>Login</h4>
            <form className="form">
               <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" />
               </div>
               <div className='form-control'>
                     <label htmlFor="email">Password</label>
                    <input type="email" name="" id="" />
               </div>
               <div className='form-control'>
                   <button type="button">Login</button>
               </div>
               <div className='link-button'>
                    <span style={{marginRight:"4px"}}>New to Ema-john?</span>
                    <Link to="/signup" style={{color:"#F90"}}>Create New Account</Link>
               </div>
            </form>
        </div>
    );
};

export default Login;