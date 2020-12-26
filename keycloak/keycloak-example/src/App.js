import { useState } from 'react';

import { useKeycloak } from '@react-keycloak/web'


function App() {
  
  const [test, setTest] = useState(''); //Just using hooks for the first time
  const { keycloak, initialized } = useKeycloak();
  
  //This part display loading until the keycloak is initialized....
 
  if (!initialized) {
    return <div>Loading...</div>
  }

  if (test === '')  setTest("Hello World!");

 
  return (
    
      <div> 
        This is a test: {test} <br/>
        {keycloak.authenticated ? 
          <div>You are logged in as {keycloak.tokenParsed['given_name']} {keycloak.tokenParsed['family_name']} <button onClick={keycloak.logout}>Logout</button> </div> 
          : <button onClick={keycloak.login}>Login</button>}
      </div>
    
  );
}

export default App;
