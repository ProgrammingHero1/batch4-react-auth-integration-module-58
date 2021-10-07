import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}>GitHub Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;