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
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Condition" />
                </Form.Group>
                {errorElements}
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    Login
                </Button>
                <p>New in English Tutor? <Link style={{ textDecoration: 'none' }} to='/register'>Please Register</Link></p>
                <p className='mt-2'>Forget Password? <Link className='text-primary text-decoration-none' to='/register' onClick={resetPassword}>Reset Password</Link> </p>
                <SocialIcon></SocialIcon>
                {/* <div className='d-flex justify-center align-items-center'>
                    <div className='w-50 orLine'></div>
                    <p className='mt-3 mx-4'>OR</p>
                    <div className='w-50 orLine'></div>
                </div>
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    <img width={30} src={google} alt="" />
                    <span className='ms-2'>SignIn With Google</span>
                </Button>
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    <img width={30} src={facebook} alt="" />
                    <span className='ms-2' >SignIn With Facebook</span>
                </Button>
                <Button variant="primary" type="submit" className='mb-3 button w-50 mx-auto d-block'>
                    <img width={30} src={github} alt="" />
                    <span className='ms-2'>SignIn With GitHub</span>
                </Button> */}
            </Form>
        </div>
    );
};

export default Login;