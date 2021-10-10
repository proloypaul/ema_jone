import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div  className="form-container">
            <div>
                <div>
                    <h1>Ema-Jhon</h1>
                </div>
                <div>
                    <h3>Sign In</h3>
                    <form >
                        <label>Enter Email or Number</label>
                        <br/>
                        <input type="email" name="" id="" />
                        <br/>
                        <input type="password" name="" id="" placeholder="Enter Your Password" />
                        <br/>
                        <input className="addToCartBtn" type="submit" value="Next" />
                        <br/>
                        <p>New to Ema-jhon click here<Link to="/register">Sign Up</Link></p>
                    </form>
                </div>
                <div>
                    <button><Link to="/register">Create a new Account</Link></button>
                    <p>-----------------------Or---------------------------</p>
                </div>
                <div>
                    <button>Sign In With Google</button>
                    <button>Sign In With GitHub</button>
                    <button>Sign In With FaceBook</button>
                </div>
                
            </div>
        </div>
    );
};

export default Login;