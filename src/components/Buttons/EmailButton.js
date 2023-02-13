import React from 'react';
import "../../css/Buttons.css";

function EmailButton() {
    return (
      <a href="mailto:deendevelopers@gmail.com?subject=QLETTERS:REUEST&body=">
        <button className='btn btn-teal btn-lg'>Send Email</button>
      </a>
    );
  }
  
  export default EmailButton;