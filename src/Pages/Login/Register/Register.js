import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialIcon from '../SocialIcon/SocialIcon';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    // Registation Page
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleUseNavigateRegister = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }


    const handleOnSubmitRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password)
        createUserWithEmailAndPassword(email, password)
        console.log(name, email, password)
    }
    return (
        <div className='w-50 mx-auto my-5 bg-light px-5'>
            <h1 className='pt-2 text-center login-header'>Please Register</h1>
            <Form onSubmit={handleOnSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Condition" />
                </Form.Group>
                {error}
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    Register
                </Button>
                <p className='text-dark'>Already have an Account? <Link style={{ textDecoration: 'none' }} to='/login' onClick={handleUseNavigateRegister}>Please Login</Link></p>
                <SocialIcon></SocialIcon>

            </Form>
        </div>
    );
};

export default Register;