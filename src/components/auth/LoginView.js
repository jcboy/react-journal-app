import React from 'react';
import {useDispatch} from "react-redux";

import { Link } from 'react-router-dom'
import {useForm} from "../../hooks/useForm";
import {startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";

export const LoginView = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'jcboy.@gmail.com',
        password: '114499'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(formValues);

        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-5"
                >
                    Login
                </button>


                <div className="auth__social-networks mt-5">
                    <p>Login with social networks</p>

                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            Sign in with google
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>

            </form>
        </>
    )
}