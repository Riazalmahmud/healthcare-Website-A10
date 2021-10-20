import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
import medicalPic from '../../../images/Circle/medical vector_.jpg';
import whyUSpic from '../../../images/symptop-right.png';
import whyFristpic1 from '../../../images/service/symptop1.png';
import whyFristpic2 from '../../../images/service/symptop2.png';
import whyFristpic3 from '../../../images/service/symptop3.png';

import Services from '../Service/Services/Services';
import Doctors from '../Doctors/Doctors';
const Home = () => {
    return (
        <div>
            <header className="banner-image bg-blue">
                <div className="container">
                    <div className="w-50 banner-text">
                        <h1 className="text-white fw-bold">We Provide Best <br /> Services Medirus</h1>
                        <br />
                        <p className="text-white fw-bold">We appreciate how busy people are and how easy it can be to forget an appointment or mislay an appointment card; however, patients not attending their appointments have a negative impact on the service the Trust provides.</p>
                        <Button variant="success" className="bg-blue"> <Link to="/about"></Link> Appointment</Button>
                    </div>
                </div>


            </header>


            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="col-lg-6 col-md-6 col-sm-12 expriance-image d-flex justify-content-start">
                                <div>
                                    <img src={medicalPic} alt="" />
                                </div>

                                <div className="Experience">
                                    <h1>25+ Years <br /> <span className="ms-auto"></span> Of <br /> Experience </h1>
                                    <h5 className="text-danger">
                                        help increase your readers.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 Experience-text">
                            <p> Dr. Sam George S/O Mr. George Steve has worked with our team at International Hospital for 3 years i.e. 2012-2015. During his working tenure he has been really dynamic, punctual and efficient person. His way of working was systematic though. He has his specialization in Medicine and Surgery and for this reason he has been made in-charge of Surgery for a year.Owing to his professional skills he has successfully leaded many surgeries during this time span.  </p>

                        </div>
                    </div>
                </div>
            </main>

            {/* service section  */}
            <div className="service-section">
                <div className="container service-text">
                    <h1 className="fw-bold pt-5">Our Services</h1>
                </div>
                <div className="container">
                    <Services></Services>
                </div>
            </div>

            {/* why section  */}
            <div className="why-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 py-5 mb-5">
                            <h1 className="why-section-text">Why Choose Us</h1>
                            <p className="fw-bold">Clinical excellence must be the priority for any health care service provider. MediCare Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.</p>
                            <div className="d-flex justify-content-start">

                                <div className="why-frist">
                                    <img src={whyFristpic1} alt="" />
                                </div>
                                <div className="why-text ps-3 pt-3 py-5">
                                    <h3 className="fw-bold">Quality Treatment</h3>
                                    <p className="fw-bold text-dark float-left">CMS has approved hundreds of MIPS quality measures, but many of these will not be relevant to psychiatrists. Fortunately</p>
                                </div>

                            </div>
                            <div className="d-flex justify-content-start">

                                <div className="why-frist">
                                    <img src={whyFristpic2} alt="" />
                                </div>
                                <div className="why-text ps-3 pt-3 py-5">
                                    <h3 className="fw-bold">Modern Equipment</h3>
                                    <p className="fw-bold text-dark float-left">CMS has approved hundreds of MIPS quality measures, but many of these will not be relevant to psychiatrists. Fortunately</p>
                                </div>

                            </div>
                            <div className="d-flex justify-content-start">

                                <div className="why-frist">
                                    <img src={whyFristpic3} alt="" />
                                </div>
                                <div className="why-text ps-3 pt-3 py-5">
                                    <h3 className="fw-bold">24/7 Emergency</h3>
                                    <p className="fw-bold text-dark float-left">CMS has approved hundreds of MIPS quality measures, but many of these will not be relevant to psychiatrists. Fortunately</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img className="img-fluid" src={whyUSpic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* doctors section  */}
            <div className="doctors">
                <div className="container">
                    <Doctors></Doctors>
                </div>
            </div>

        </div>
    );
};

export default Home;