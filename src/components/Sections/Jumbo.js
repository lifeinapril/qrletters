


import React from 'react';
import { Container } from 'react-bootstrap';
import "../../css/Jumbo.css";

const Jumbo = (props) => {
return (
<Container fluid className='box text-left' style={{backgroundImage: `url(${props.image}`}}>
<br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
        <b style={{fontSize:50,fontFamily:`${props.font || 'tahoma'}`,transition:"all 1s",maxWidth:"600px"}}>
             <p>{props.title} </p>
        </b>
        <p style={{fontSize:25,maxWidth:"600px"}}>
          {props.body}
        </p>
        {
        props.button ? props.button:null
        }
      <br/><br/>
      <br/><br/>
</Container>

);

};

export default Jumbo;
