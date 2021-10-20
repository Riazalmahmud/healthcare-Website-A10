import React from 'react';
import Services from './Services/Services';

const Service = () => {
    return (
        <div>
            <div className="service-section">
                <div className="container service-text">
                    <h1 className="fw-bold pt-5">Our Services</h1>
                </div>
                <div className="container">
                    <Services></Services>
                </div>
            </div>
        </div>
    );
};

export default Service;