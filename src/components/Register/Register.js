import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-container">
            <div>
                <h1>Register Here</h1>
                <form>
                    <h4>User Name</h4>
                    <input type="text" name="" id="" placeholder="Enter Your Name" />
                    <h4>Email</h4>
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <h4>PassWord</h4>
                    <input type="password" name="" id="" placeholder="PassWord Must be least 8 character"/>
                    <br/>
                    <input type="password" name="" id="" placeholder="Confirm Your PassWord"/>
                    <br/>
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset Password" />
                </form>
                <p>Already have an Account <Link to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;