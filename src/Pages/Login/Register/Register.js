import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { Link, useNavigate } from 'react-router-dom';
import SocialIcon from '../SocialIcon/SocialIcon';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    // const handleNameBlur = event => {
    //     console.log(event.target.value)
    // }

    // const handleEmailBlur = event => {
    //     console.log(event.target.value)
    // }

    // const handlePasswordBlur = event => {
    //     console.log(event.target.value)
    // }
    // if (error) {
    //     return (
    //         <div>
    //             <p>Error: {error.message}</p>
    //         </div>
    //     );
    // }
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
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
                    Login
                </Button>
                <p>Already have an Account? <Link style={{ textDecoration: 'none' }} to='/login' onClick={handleUseNavigateRegister}>Please Login</Link></p>
                <SocialIcon></SocialIcon>

            </Form>
        </div>
    );
};

export default Register;