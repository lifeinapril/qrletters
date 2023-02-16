import React from 'react';
import "../../css/Splash.css";
import demo from "../../Config";
class Splash extends React.Component {
    constructor(props) {
        super();
        this.ref = React.createRef();
      }
    
  render() {
        return (
            <>
       

            <div  className={this.props.dark ? 'bg-dark':'bg-light'}>
            <div className="d-center align-items-center justify-content-center text-center min-vh-100">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <img 
                    alt="logo"
                    ref={this.ref}
                    src={demo.icon}
                    style={{height:70,display:"block",margin:"auto"}}
                    className="appicon"
                    />
                    <br/>
                    <h6 className='text-center'>Give me a sec...</h6>

                    </div>
                </div>
           </>
        );
    }

}

export default  Splash;
