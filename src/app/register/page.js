"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export default function DittoDesign() {
    const [selected, setSelected] = useState('card');
    const [show2, setShow2] = useState(false);
    const [show, setShow] = useState(false);

     const [value, setValue] = useState();

    return (


        <div className='login_sec'>

            <Row className='justify-content-between align-items-center gy-4'>
                <Col xl={5} lg={7}>
                    <div className='login_img'>
                        <img src="/img/login_side_img.png" />
                        <div className='content_img_box'>
                            <h4>Explore Events Effortlessly</h4>
                            <p>Discover, book, and track events seamlessly with calendar integration and personalized event curation   </p>
                        </div>
                    </div>
                </Col>
                <Col xl={6} lg={5} >
                    <Row className="justify-content-center align-items-center">
                        <Col xl={7} lg={9} md={12}>
                            <div className="common_field ">
                                <div className='fz_32'>
                                    <h2 className="">Get started</h2>
                                    <p>Register for events and create images of the activities you plan to attend.</p>
                                </div>

                                <Form className="login_field">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <PhoneInput
                                            defaultCountry="US"
                                            international
                                            countryCallingCodeEditable={false}
                                            value={value}
                                            onChange={setValue}
                                            className='phone_input'
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
                                        <div className="d-flex gap-2 position-relative">
                                            <Form.Control
                                                type={show ? "text" : "password"}
                                                placeholder="password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShow(!show)}
                                                className="password-eye-btn"
                                            >
                                                <img
                                                    src={show ? "/img/lock.svg" : "/img/unlock.svg"}
                                                    alt="toggle password"
                                                />
                                            </button>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <div className="d-flex gap-2 position-relative">
                                            <Form.Control
                                                type={show2 ? "text" : "password"}
                                                placeholder="Confirm Password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShow2(!show2)}
                                                className="password-eye-btn"
                                            >
                                                <img
                                                    src={show2 ? "/img/unlock.svg" : "/img/lock.svg"}
                                                    alt="toggle confirm password"
                                                />
                                            </button>
                                        </div>
                                    </Form.Group>
                                </Form>

                                <Link href="/otp" className="common_btn w-100">Sign Un</Link>

                                <div className='other_text'>
                                    <span></span>
                                    <h6>
                                        or sign up with
                                    </h6>
                                    <span></span>
                                </div>

                                <div className='social_icon'>
                                    <Link href="">   <img src="/img/app_icon.svg" /></Link>
                                    <Link href="">   <img src="/img/google_icon.svg" /></Link>
                                    <Link href="">   <img src="/img/facebook_icon.svg" /></Link>
                                </div>

                                <div className="other_signup">
                                    <span> Don't have an account? <Link href="/login">Login</Link></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>


    );
}