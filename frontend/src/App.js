import React, { useState } from 'react';

export default function App(){
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTAwNTU4MzIsImlhdCI6MTYwNzQ3OTc0OCwiYXV0aF90aW1lIjoxNjA3NDc5NzQ4LCJqdGkiOiIwZjI1Mzk4Mi0xMWQ1LTRlMGMtODUxMC1kOTQyN2JhMTYyMGYiLCJpc3MiOiJodHRwczovL2xvZ2luLmRzb3AuaW8vYXV0aC9yZWFsbXMvYmFieS15b2RhIiwiYXVkIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsInN1YiI6ImJlMDY2OTcwLWE3ZWQtNDEyMi04YjA1LTdiYzYzYTdkZDNkZCIsInR5cCI6IklEIiwiYXpwIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsIm5vbmNlIjoiZmNFTE83WmMxcmFtLUVta1dKZFZYNUpaMjJ0V0ppUi1VaWw3MVU0V3prZyIsInNlc3Npb25fc3RhdGUiOiJjYTM5M2I3My02MWRiLTQ2ZjYtOGNhYy0yYzE1ZjM1NmVhNDMiLCJhY3IiOiIxIiwidGVybXNfYW5kX2NvbmRpdGlvbnMiOiIxNTk3MDU1MDQ4IiwiYWZmaWxpYXRpb24iOiJPdGhlciIsIm9yZ2FuaXphdGlvbiI6IlJldmFDb21tIiwicmFuayI6Ik4vQSIsInVzZXJjZXJ0aWZpY2F0ZSI6IlVSQU5BS0EuTUlDSEFFTC5CTEFJTkUuMDEyMzQ1Njc4OSIsImdpdmVuX25hbWUiOiJNaWNoYWVsIiwiZmFtaWx5X25hbWUiOiJVcmFuYWthIiwiZW1haWwiOiJtdXJhbmFrYUByZXZhY29tbS5jb20ifQ.u0JD1TAvgaAL3klfjUPOZ7h9o3nk4bNr41sfmmtOvLM

   
   const [status, setStatus] = useState();
   const [displayData, setDisplayData] = useState("No data to display");
   
   const handleChange = (event) => {
     setStatus(prev => ({...prev, [event.target.name]: event.target.value}));

   }  

  const writeDatabase = async (event) => {
  
    let response = await fetch("http://localhost:8000/writeDB", { 
      // Adding method type 
      method: "POST", 
      // Adding body or contents to send 
      body: JSON.stringify({ 
          sampleData: status.sampleData
      }), 
      // Adding headers to the request 
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
  })
  if (response.status < 200 && response.status >= 299) setDisplayData("Error posting to database");
  else setDisplayData("Posted Successfully to the database");
  }

  const readDatabase = async(event) => {
    let response = await fetch("http://localhost:8000/readDB");
    let data = await response.json();
    setDisplayData(data.map(each => (<div className="sample-data-class" key={each.id}>{each.sampleData}</div>)));
    
  }

  const sendToken = async (event) => {
    let response = await fetch("http://localhost:8000/parseJWT");
    
    
    if (response.status === 200){
      let data = await response.json();
      setDisplayData(Object.entries(data).map(([key, val]) => (<div className="sample-data-class"><span>{key}: </span> <span>{val}</span></div>)))
    } else setDisplayData("No valid token to parse");
    
  }    

  return (
    <div>
    <div>
      Input data to stick in database: 
        <input name="sampleData" className="sampleData" type="text" onChange={(event)=> handleChange(event)}/>
        <button className='sendData' onClick={writeDatabase}>Send Data to Database</button>
    </div>
    <div>
  
        <button className='parseJWT' onClick={sendToken}>Parse token</button>
    </div>
  
    <div>  <button className='readData' onClick={readDatabase}>Read data from database</button> </div>
    <div>  <h1>DISPLAY</h1>
      <div className="display-data-class">{displayData}</div>
      </div>
    </div>
  );
  
}