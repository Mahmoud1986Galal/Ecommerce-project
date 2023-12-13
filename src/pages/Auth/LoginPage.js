import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <p className='slider-title mt-5 fw-bolder'>
                تسجيل الدخول
            </p>
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '30rem' }}>


                <Form style={{ border: '1px solid black', borderRadius: '2rem' }} className='h-25 w-30 text-center p-3 mt-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor='email'>البريد الالكترونى</Form.Label>
                        <Form.Control id='email' className='py-2' type="email" placeholder="الايميل..." />
                        <Form.Text className="text-muted">
                            نحن لن نقوم ابدا بمشاركة الايميل الخاص بك مع اى شخص اخر
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor='pass'>كلمة السر</Form.Label>
                        <Form.Control id='pass' type="password" placeholder="كلمة السر..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        تسجيل دخول
                    </Button>
                </Form>
            </div>
            <label className='d-flex justify-content-center'>
                ليس لديك حساب؟
                <Link to='/register' style={{ textDecoration: 'none' }}>
                    <span className='text-danger mx-2' style={{ cursor: 'pointer' }}>
                        اضفط هنا
                    </span>
                </Link >
            </label>

        </>
    )
}

export default LoginPage