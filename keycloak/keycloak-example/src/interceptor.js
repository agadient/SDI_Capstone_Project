const axios = require('axios');

axios.interceptors.request.use(req => {
  const token = global.token ? global.token : 'dummy_token'  ;
  req.headers['Authorization'] = 'Bearer ' + token;
  console.log(req);
 
  return req;
});

