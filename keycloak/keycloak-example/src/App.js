import {  useState } from 'react';
import { useKeycloak } from '@react-keycloak/web'
const axios = require('axios');
require('./interceptor');

function App() {

  
   //Test API Call 
  async function getData(callRoute = '/') {
    
    let response = await axios.get('http://localhost:7001'+callRoute);
    
    //console.log("Response: "+response.data);
    return response.data;
 }


 
 
  const [test, setTest] = useState(''); //Just using hooks for the first time
  const [rootRoute, setRootRoute] = useState('');
  const [userRoute, setUserRoute] = useState('');

  var { keycloak, initialized } = useKeycloak();
 
   //This part display loading until the keycloak is initialized....
 
  if (!initialized) {
    return <div>Loading...</div>
  }
  else if (initialized && keycloak.authenticated && !global.token) { 
    //send accessToken up to global scope so we can snag it over in the interceptor
    global.token = keycloak.token; 

  } 

  if (test === '') { 
    setTest("Hello World!");
    let apiData = getData();  //jsut get the data on first load
    apiData.then(each => setRootRoute(each));
    //Now lets get ourselves a "protected" route that is only available to users that are signed in
    apiData = getData('/user');
    apiData.then(each => setUserRoute(each))
      .catch(setUserRoute("Not logged in/Error of some sort"));
    
  }

  
  return (
      <div> 
        This is a test: {test} <br/>
        The API at root says: {rootRoute}<br/>
        Backend API User Authentication status: {userRoute} <br/>
        {keycloak.authenticated ? 
          <div>You are logged in React as {keycloak.tokenParsed['given_name']} {keycloak.tokenParsed['family_name']} <button onClick={keycloak.logout}>Logout</button> </div> 
          : <button onClick={keycloak.login}>Login</button>}
      </div>
    
  );
}

export default App;
