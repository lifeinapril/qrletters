import React,{useState} from 'react';
import "../../css/Buttons.css";
import {Button,Offcanvas,Form,Alert} from 'react-bootstrap';
import appicon from "../../logo.png";
import API from '../../API';
import { useNavigate } from 'react-router-dom';


function WriteButton(props){
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [from, setFrom] = useState('');
  const [resBody, setBody] = useState({});
  const [error, setError] = useState("");
  

  const [Loading, startLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showAlert, setAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFileChange = event => {
      setFile(event.target.files[0]);
    };
    const sendLetter = event => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", title);
          formData.append("message", message);
          formData.append("from", from);
          startLoading(true);
          API.post(`create`,formData).then(res =>{
            var response=res.data;
            setBody(response);
            setAlert(true);
            startLoading(false);
            console.log(response);
            if(response.success===true){
              setShow(false);
              navigate('/secure/'+response.data.letter_id);
            }
          }).catch(error => {
            setShow(false);
            startLoading(false);
            setError(error);
            setBody(error);
            setAlert(true);
           
          });
        }

        if (error) {
          return <div>Error: {error.message}</div>;
        }

return (
 <>

<Alert show={showAlert}  variant={resBody.status ? "success":""}>
  <Alert.Heading>{resBody.message}</Alert.Heading>
</Alert>


    


            <Button onClick={handleShow} variant="light" href={props.path} size='lg'>Write a letter</Button>


            <Offcanvas variant="dark" className="bg-grey" show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header variant="light" closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>

                <div className='text-center padding'>
                        <img
                        alt="logo"
                        src={appicon}
                        style={{height:35,margin:10}}
                        className="d-inline-block align-top"
                        />
                          <h6>   Write a secret message and store it in a qrcode</h6>
                </div>

                <Form onSubmit={e => {sendLetter(e)}}>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" name='name' value={title} onChange={e => setTitle(e.target.value)} placeholder="Eg : My dear Hanna" />
                      </Form.Group>


                      <Form.Group>
                         <Form.Label>Body:</Form.Label>
                         <Form.Control as="textarea" rows="10" value={message}  onChange={e => setMessage(e.target.value)} aria-label="With textarea" placeholder="Type in a message"/>
                      </Form.Group>


                      <br/>
                      <Form.Group className="mb-3">
                        <Form.Label>Your's Sincerely (optional)</Form.Label>
                        <Form.Control type="text"  name='from' value={from} onChange={e => setFrom(e.target.value)} placeholder="Eg : Tobi" />
                      </Form.Group>

                  
                      <hr/>
                     

                      <Form.Group className="mb-3">
                        <Form.Label>Add a photo (optional)</Form.Label>
                        <Form.Control type="file"  name='photo' value={file} onChange={e => handleFileChange} />
                        <Form.Text className="text-muted">
                          This image will be used as a cover or a background image.
                        </Form.Text>
                      </Form.Group>



                      <br/>
                      <Button disabled={Loading || !title || !message} variant="teal" size='lg' style={{width:"100%"}} type="submit">
                       {Loading ? "loading...":"Submit"}
                      </Button>
                    </Form>
                </Offcanvas.Body>
              </Offcanvas>
            </>

);

};

export default WriteButton;
