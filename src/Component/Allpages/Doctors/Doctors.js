import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json(res))
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;