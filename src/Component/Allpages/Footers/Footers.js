import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Footers.css'
const Footers = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col footer-text">
                            <h2 className="text-white fs-bold">About</h2>
                            <p className="text-white fs-bold">We appreciate how busy people are and how easy it can be to forget an appointment or mislay an appointment card</p> <br />
                            <h1 className="text-white fst-italic">MediCare</h1>

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col text-white">
                            <div className="footer-nav">
                                <h4>Hot Link</h4>
                                <Link to="/home">Go Home</Link>
                                <Link to="/service">Service</Link>
                                <Link to="/about">About</Link>
                                <Link to="/about">Blog</Link>
                                <Link to="/contact">Contact</Link>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col footer-button">
                            <>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                    <Button className="mt-3 w-50" type="submit">Subscribe</Button>
                                </Form.Floating>

                            </>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;