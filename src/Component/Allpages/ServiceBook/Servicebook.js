import React from 'react';
import { useParams } from 'react-router';

const Servicebook = () => {
    const { serviceBookID, Description } = useParams();
    console.log(serviceBookID)
    return (
        <div>
            <div className="container">
                <p>{serviceBookID}</p>
            </div>
        </div>
    );
};

export default Servicebook;