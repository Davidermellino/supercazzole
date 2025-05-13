import React, { useState, useEffect, ReactNode } from 'react';
import supabase from '../utils/supabaseClient';
import { Navigate } from 'react-router-dom';


function Wrapper({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setAuthenticated(!!session);
            setLoading(false);
        }

        getSession();
    }, []);
 
   if (loading) {
        return <div className="container mt-5"><h2>Loading...</h2></div>;
    } else {
        if (authenticated) {
            return <>{children}</>;
        }
        return <Navigate to="/log-in" />;
    }
}

export default Wrapper;