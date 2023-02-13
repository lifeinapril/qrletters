import React from 'react';
import WriteButton from '../components/Buttons/WriteButton';
import Brief from '../components/Sections/Brief';
import app from "../Config";

class Home extends React.Component {
  render() {
        return (
            <>
                <Brief dark={false} full={false} data={app.about[1]} icon={app.about[0].icon} image={app.about[1].image} button={<WriteButton/>}/>       
            </>
        );
    }

}

export default Home;
