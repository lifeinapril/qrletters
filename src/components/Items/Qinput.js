import React, { useState } from 'react';
import { Form , Spinner,Alert,Modal } from "react-bootstrap";
import "../../css/Letter.css";
import "../../css/Form.css";
import API from '../../API';

function QInput(props) {
    const [inputValue, setInputValue] = useState('');
    const [letter, setLetter] = useState({});
  const [showletter, ShowLetter] = useState(false);
  const [loading, setLoading] = useState(false);

  const [resBody, setBody] = useState({});
  const [showAlert, setAlert] = useState(false);
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        API.post("answer",{
          id:props.id, 
          answer: inputValue
            })
            .then(function(res){
            setLoading(false);
            console.log(res.data);
            if (res.data.success) {
                ShowLetter(true);
                setLetter(res.data.data);
            }else{
                setBody(res.data);
                setAlert(true);
                setLetter({});
            }
        })
        .catch(function(error){
          setLoading(false);
          setBody(error);
          setAlert(true);
        });
    }

  return (
    <>


<Alert show={showAlert}  variant={resBody.success ? "success":""}>
  <Alert.Heading>{resBody.message}</Alert.Heading>
</Alert>



        <Form onSubmit={handleSubmit}>
            <Form.Control disabled={loading} className="qrinput" value={inputValue} onSubmit={handleSubmit} 
          onChange={handleInputChange} placeholder="Guess the answer" />
          <br/>
          {loading && <Spinner animation="border" role="status"></Spinner>}
        </Form>
        <Modal variant="light" size="lg" show={showletter} onHide={() => ShowLetter(false)} aria-labelledby="contained-modal-title-vcenter" centered>
            <div className="letter">
                    <div className="subject">
                        <p>{letter.title}</p>
                    </div>
                    <div className="body">
                        {letter.message}
                    </div>
                    <div className="signature">
                        <p>Sincerely,</p>
                        <p>{letter.from}</p>
                    </div>
            </div>
    </Modal>
    </>
  );
}

export default QInput;
