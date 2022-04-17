import React from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault()
    }
    return (
        <div className='w-50 mx-auto my-5 bg-light px-5'>
            <h1 className='pt-2 text-center login-header'>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Condition" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    Login
                </Button>
                <p>Already have an Account? <Link style={{ textDecoration: 'none' }} to='/login'>Please Login</Link></p>
                <div className='d-flex justify-center align-items-center'>
                    <div className='w-50 orLine'></div>
                    <p className='mt-3 mx-4'>or</p>
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
                </Button>
            </Form>
        </div>
    );
};

export default Register;