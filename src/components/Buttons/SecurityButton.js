import React,{useState} from 'react';
import {
    Button,Modal
} from 'react-bootstrap';
import "../../css/Buttons.css";



function SecurityButton(props) {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="light" onClick={() => setShow(true)}>
          {props.title}
        </Button>
            <Modal variant="dark" size="md" show={show} onHide={() => setShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
            </Modal>
      </>
    );
  }
  


  export default SecurityButton;
