import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import QRCode from "qrcode.react";
import Splash from '../components/Sections/Splash';
import API from '../API';


function Code() {
  const [isLoading,setLoader] = useState(true);
    const { id } = useParams();
    const [data, setData] = useState({});

  useEffect(() => {
    API.get(`/${id}`).then(function(res){
      setData(res.data.data);
      setLoader(false);
    });
  }, [id]);

        return (
            <>
             {
  isLoading ?
       <>
          <Splash/>
       </> :
                    <div className="d-center align-items-center justify-content-center text-center min-vh-100">
                        <Container>  
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <QRCode value={data.code} fgColor="#990044" bgColor="#ffffff" imageSettings={{width:300,height:300}} />
                        <br/>
                        <br/>
                        <br/>
                        <h2><b>{data.title}</b></h2>
                        <hr/>
                        <h6>Your secured QRLetter is ready, take a screenshot and print on items. Reader would scan this code to read the message</h6>
                        <br/>
                        </Container>
                    </div>
}
            </>
        );
}

export default Code;
