import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Firebase/UseAuth';

const PrivetRouter = ({ children, ...rest }) => {
    const { user, isLoding } = UseAuth()

    if (isLoding) {

        return <Spinner animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRouter;