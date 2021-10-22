import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";



const PrivateRoute = ({children}) => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;
    return isAuthenticated ? <> {children}</> : <div>No estas Autenticado para ver el sitio</div>
};

export default PrivateRoute
