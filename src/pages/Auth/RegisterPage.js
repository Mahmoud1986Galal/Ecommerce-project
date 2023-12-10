import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <Container style={{ minHeight: '30rem' }}>
            <Row className='py-5 d-flex justify-content-center hieght-search'>
                <Col sm='12' className='d-flex flex-column'>
                    <label className='mx-auto title-login'>تسجيل حساب جديد</label>
                    <input type='text' placeholder='اسم المستخدم...' className='user-input mt-3 text-center mx-auto' />
                    <input type='email' placeholder='الايميل...' className='user-input my-3 text-center mx-auto' />
                    <input type='password' placeholder='كلمة السر...' className='user-input my-3 text-center mx-auto' />
                    <input type='password' placeholder='تأكيد كلمة السر...' className='user-input text-center mx-auto' />
                    <button className='btn-login mx-auto mt-4'>تسجيل الحساب</button>
                    <label className='d-flex justify-content-center my-5'>
                        لديك حساب بالفعل؟
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <span className='text-danger mx-2' style={{ cursor: 'pointer' }}>
                                اضفط هنا
                            </span>
                        </Link >
                    </label>

                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage