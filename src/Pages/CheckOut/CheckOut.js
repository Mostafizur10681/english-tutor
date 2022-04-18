import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')

    const handleOnSubmitCheckoutForm = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = addressRef.current.value;
        // console.log(email, password)
        console.log(name, email, password)
        alert('Thank you for the booking')
    }
    return (
        // Protected Section
        <div className='w-50 mx-auto my-5 bg-light py-2 px-5'>
            <h1 className='pt-2 text-center login-header'>Please FillUp </h1>
            <Form onSubmit={handleOnSubmitCheckoutForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address </Form.Label>
                    <Form.Control ref={addressRef} type="text" placeholder="Enter Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone </Form.Label>
                    <Form.Control ref={phoneRef} type="phone" placeholder="Enter phone" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2 button w-50 mx-auto d-block'>
                    Process Checkout
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;