import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import SocialIcon from '../SocialIcon/SocialIcon';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    if (user) {
        navigate('/home')
    }
    const handleOnSubmitLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    let errorElements;

    if (error) {
        errorElements = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    const handleRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='w-50 mx-auto my-5 bg-light px-5'>
            <h1 className='pt-2 text-center login-header'>Please Login</h1>
            <Form onSubmit={handleOnSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Condition" />
                </Form.Group>
                {errorElements}
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    Login
                </Button>
                <p>New in English Tutor? <Link style={{ textDecoration: 'none' }} to='/register' onClick={handleRegister}>Please Register</Link></p>
                <p className='mt-2'>Forget Password? <Link className='text-primary text-decoration-none' to='/register' onClick={resetPassword}>Reset Password</Link> </p>
                <SocialIcon></SocialIcon>

            </Form>
        </div>
    );
};

export default Login;