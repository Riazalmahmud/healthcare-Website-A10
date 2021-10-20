import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicePd from '../ServicePd/ServicePd';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <ServicePd service={service}></ServicePd>)
                }
            </Row>


        </div>
    );
};

export default Services;