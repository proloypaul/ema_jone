import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';

// private Router code collect on react router website Redirects(Auth) file
const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth()
    return (
       <Route
       {...rest}
       render={({location}) => user.email ? children 
       : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}   
       ></Redirect>}

       >

       </Route>
    );
};

export default PrivateRoute;