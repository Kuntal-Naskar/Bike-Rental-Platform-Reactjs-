import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import HMainbar from "./HMainbar";
import MSpinner from './MSpinner';
import '../css/Home.css'; 

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000); 
    }, []);

    return (
        <div className={`home ${loading ? 'loading' : 'loaded'}`}>
            {loading ? (
                <MSpinner />
            ) : (
                <>
                    <HMainbar />
                    <Menu />
                </>
            )}
        </div>
    );
};

export default Home;
