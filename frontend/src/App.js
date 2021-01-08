import React, { useState } from 'react';

export default function App(){

   
   const [status, setStatus] = useState();
   const [tokenData, setTokenData] = useState("Token");
  

   const handleChange = (event) => {
     setStatus(prev => ({...prev, [event.target.name]: event.target.value}));

   }
  

  const writeDatabase = (event) => {
    event.preventDefault()
  }

  const readDatabase = (event) => {
    event.preventDefault()
  }

  const sendToken = (event) => {
    event.preventDefault()
  }    

  
    return (
      <div>
        Input data to stick in database: <input name="sampledata" className="sampledata" type="text" onChange={(event)=> handleChange(event)}></input><button onSubmit={writeDatabase}>Send Data to Database</button>
        <br/>
        Input encoded JWT token to parse: <textarea name="token" type="text" onChange={(event)=> handleChange(event)}></textarea><button onSubmit={sendToken}>Send Data to Database</button>
        <br/>
        <button onSubmit={readDatabase}>Read data from database</button>
        <h1>DISPLAY</h1>
        <textarea type="text" readOnly>{tokenData}</textarea>
      </div>
    );
  
}

