import React,{useState} from 'react';
import "../../css/Letter.css";
import { Button,Form,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../../API';

function Security(props) {
    const navigate = useNavigate();
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    const [Loading, startLoading] = useState(false);
    const [resBody, setBody] = useState({});
    const [showAlert, setAlert] = useState(false);

  const setSecurity = event => {
          event.preventDefault();
          var Data={
            id:props.id,
            question:question,
            answer1:answer1,
            answer2:answer2,
            answer3:answer3,
            answer4:answer4
          }
          startLoading(true);
          API.post(`security`,Data).then(res =>{
          startLoading(false);
          setBody(res.data);
          setAlert(true);
          if(res.data.success){
                navigate('/code/'+props.id);
            }else{

            };
          });
        }

return (
    <>

<Alert show={showAlert}  variant={resBody.status ? "success":""}>
  <Alert.Heading>{resBody.message}</Alert.Heading>
</Alert>


  
    <Form onSubmit={e => {setSecurity(e)}}>
                      <h2>Add a security question</h2>
                      <h6>create a question only you and the reader know the answer to for privacy</h6>
                      <Form.Group className="mb-3">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control type="text" name='question' value={question} onChange={e => setQuestion(e.target.value)} placeholder="Eg : What was our first trip?" />
                      </Form.Group>



                      <hr/>
                      <h6>Give 4 likely answers to this question, we use AI to know if the reader guessed right</h6>
                      <br/>
                      <Form.Group className="mb-3">
                        <Form.Label>Answer 1</Form.Label>
                        <Form.Control type="text"  name='answer1' value={answer1} onChange={e => setAnswer1(e.target.value)} placeholder="Answer 1" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Answer 2</Form.Label>
                        <Form.Control type="text"  name='answer2' value={answer2} onChange={e => setAnswer2(e.target.value)} placeholder="Answer 2" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Answer 3</Form.Label>
                        <Form.Control type="text"  name='answer3' value={answer3} onChange={e => setAnswer3(e.target.value)} placeholder="Answer 3" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Answer 4</Form.Label>
                        <Form.Control type="text"  name='answer4' value={answer4} onChange={e => setAnswer4(e.target.value)} placeholder="Answer 4" />
                      </Form.Group>

                  

                      <br/>
                      <Button disabled={Loading} variant="teal" size='lg' style={{width:"100%"}} type="submit">
                       {Loading ? "Please wait...":"Generate"}
                      </Button>
                    </Form>

                    <br/><br/><br/>
                    <br/><br/><br/>
    </>
)
}


export default Security;