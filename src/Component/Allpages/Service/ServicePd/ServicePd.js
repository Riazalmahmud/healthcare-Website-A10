import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicePd.css'
const ServicePd = (props) => {
    const { id, image, serviceName, title, Description } = props.service
    // console.log(props.service)
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <img src={image} alt="" />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            <h5>{title}</h5>
                        </Card.Text>
                        <Card.Text>
                            <p>{Description.slice(0 - 200)}</p>
                        </Card.Text>

                    </Card.Body>
                    <Link className="w-50 mb-5" to={`/servicebook/${Description}`}><Button variant="success" >  View details</Button></Link>

                </Card>
            </Col>
        </div>
    );
};

export default ServicePd;