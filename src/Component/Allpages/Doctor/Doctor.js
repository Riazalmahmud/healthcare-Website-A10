import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { img, name, employment } = props.doctor

    return (
        <div>
            <Col className="py-5">
                <Card className="service-card">
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>
                            <h3>{name}</h3>
                        </Card.Title>
                        <Card.Text>
                            <h4>{employment}</h4>
                        </Card.Text>


                    </Card.Body>


                </Card>
            </Col>
        </div>
    );
};

export default Doctor;