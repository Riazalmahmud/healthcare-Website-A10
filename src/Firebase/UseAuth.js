import React, { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';

const UseAuth = () => {
    return useContext(authContext)
};

export default UseAuth;