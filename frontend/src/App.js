import React, { useState } from 'react';

export default function App(){

   
   const [status, setStatus] = useState();
   const [tokenData, setTokenData] = useState("Token");
  

   const handleChange = (event) => {
     setStatus(prev => ({...prev, [event.target.name]: event.target.value}));

   }  

  const writeDatabase = async (event) => {
    console.log("sending data")
    let response = await fetch("http://localhost:8000/writeDB", { 
      // Adding method type 
      method: "POST", 
      // Adding body or contents to send 
      body: JSON.stringify({ 
          title: status.title
      }), 
      // Adding headers to the request 
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
  })
    let data = await response.data
    console.log(data)
  }

  const readDatabase = (event) => {
    event.preventDefault()
  }

  const sendToken = (event) => {
    event.preventDefault()
  }    
  
  return (
    <div>
      Input data to stick in database: <input name="title" className="title" type="text" onChange={(event)=> handleChange(event)}></input><button onClick={writeDatabase}>Send Data to Database</button>
      <br/>
      Input encoded JWT token to parse: <textarea name="token" type="text" onChange={(event)=> handleChange(event)}></textarea><button onSubmit={sendToken}>Send Data to Database</button>
      <br/>
      <button onSubmit={readDatabase}>Read data from database</button>
      <h1>DISPLAY</h1>
      <textarea type="text" readOnly>{tokenData}</textarea>
    </div>
  );
  
}

