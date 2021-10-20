import React from 'react';
import whyUSpic from '../../../images/symptop-right.png';
import whyFristpic1 from '../../../images/service/symptop1.png';
import whyFristpic2 from '../../../images/service/symptop2.png';
import whyFristpic3 from '../../../images/service/symptop3.png';
const About = () => {
    return (
        <div>
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
        </div>
    );
};

export default About;