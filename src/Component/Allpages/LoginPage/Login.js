import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Login.css'
import { Button } from 'react-bootstrap';
import google from '../../../images/icon/google.png';
import github from '../../../images/icon/github.png';
import useFirebase from '../../../Firebase/useFirebase';
import UseAuth from '../../../Firebase/UseAuth';
// import facebook from '../../../images/icon/facebook.png';
const Login = () => {
    const { handaleGoogleSignIn, githubSignIn, handleUserLogin } = UseAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        handleUserLogin(email, password);
        console.log(email, password)
    };

    return (
        <>
            <div className="container-fluid bg-grudiunt bg-light py-5">
                <div className="login-page w-50 m-auto py-5 my-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <FloatingLabel

                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        onChange={hanldeEmail}
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        onChange={hanldePassword}
                    >
                        <Form.Control

                            type="password"
                            placeholder="Password" />
                    </FloatingLabel>

                    <Button onClick={handleLogin} className="my-5 w-100 fw-bold fs-6 text-white " variant="submit">Sign-In</Button>

                    <p>----------------------Or----------------------</p>

                    <div className="extra-login">
                        <li> <img onClick={githubSignIn} src={github} alt="" /></li>
                        <li> <img onClick={handaleGoogleSignIn} src={google} alt="" /></li>
                    </div>


                </div>

            </div>

        </>
    );
};

export default Login;