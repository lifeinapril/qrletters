import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import QInput from '../components/Items/Qinput';
import Jumbo from '../components/Sections/Jumbo';
import API from '../API';
function Message() {
    const { id } = useParams();
    const [box, setData] = useState({});

    useEffect(() => {
        API.get(`/${id}`).then(function(res){
          setData(res.data.data);
        });
      }, [id]);
        return (
            <>
            <Jumbo bg="bg-dark" image={box.photo} variant="light" title={box.title} body={box.question} button={<QInput id={box.letter_id}/>}/>
            </>
        );
    }

export default Message;
