import React, {useState } from "react";
import { useParams } from "react-router-dom";
import Security from "../components/Items/Security";
import { Container } from 'react-bootstrap';

function Secure() {
    const { id } = useParams();
    return(
        <div className="d-center align-items-center padding justify-content-center text-center min-vh-100">
            <Container>  
                <br/>
                <br/>
            <Security id={id}/>
            </Container>
        </div>
         )
};

export default Secure;