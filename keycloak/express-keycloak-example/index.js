var express = require('express');
var cors = require('cors')


var router = express.Router();
var app = express();
var PORT = 7001;

app.use(cors({
    origin: 'http://localhost:3000'}));
const keycloak = require('./config/keycloak-config').initKeycloak();


app.use(keycloak.middleware());


app.get('/', (req,res) => {
   

    res.send("Root Route");
    console.log("Sending Root Route");
});

app.get('/user',keycloak.protect(), (req,res) => {

    console.log("sending protected user route");
    res.send("user logged in");
});

app.listen(PORT);

// {"config":{"realm":"baby-yoda","clientId":"express-keycloak-example","public":false,
// "authServerUrl":"http://localhost:5555/auth","realmUrl":"http://localhost:5555/auth/realms/baby-yoda",
// "realmAdminUrl":"http://localhost:5555/auth/admin/realms/baby-yoda","minTimeBetweenJwksRequests":10,
// "bearerOnly":true,"verifyTokenAudience":false},"grantManager":
// {"realmUrl":"http://localhost:5555/auth/realms/baby-yoda","clientId":
// "express-keycloak-example","public":false,"bearerOnly":true,"notBefore":0,"rotation":
// {"realmUrl":"http://localhost:5555/auth/realms/baby-yoda","minTimeBetweenJwksRequests":10,
// "jwks":[{"kid":"PDhOvATTJuWTHUkwUZMA6cCTUvLjryNuSvTEeZb2N3E","kty":"RSA","alg":"RS256","use":"sig","n":"
// rW9wYupSC3-nZiqdtAjceNv6tdthLRib097GUD9eiq1WUo6L8LvvjhnmmXLBfF-cD0Scv9VDzBruFdUcYarylYm4URooEgB
// -fqH8DiVzokTXtvnrlWlF4gwefoCrTOHCxDzbBisOj3RyP_nZuGBQSZMqxqrarGMSI_ohh8xkL-8jS20nDOilRRiBURaqciCd3cRcYC4L74Duhf_
// ZWTLehMJvDLOmycyk5uiEwOdKKcJ_4_b90FB0QOaYagRDrp1VsHR880CxJMCZz2OorM0h6RpbYrNyNPQnHfYs1K-J4JYhZ28RjhkG5Drnzb63UfGrBZ9ya3zgRnHUzwg3kFyumw",
// "e":"AQAB","x5c":
// ["MIICoTCCAYkCBgF2oOu6WDANBgkqhkiG9w0BAQsFADAUMRIwEAYDVQQDDAliYWJ5LXlvZGEwHhcNMjAxMjI2MjExNzUxWhcNMzAxMjI2MjExOTMxWjAUMRIwEAYDVQ
// QDDAliYWJ5LXlvZGEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCtb3Bi6lILf6dmKp20CNx42/q122EtGJvT3sZQP16KrVZSjovwu++OGeaZcsF8X5wPRJy/
// 1UPMGu4V1RxhqvKVibhRGigSAH5+ofwOJXOiRNe2+euVaUXiDB5+gKtM4cLEPNsGKw6PdHI/+dm4YFBJkyrGqtqsYxIj+iGHzGQv7yNLbScM6KVFGIFRFqpyIJ3dxFxgLgvvgO6F/9l
// ZMt6Ewm8Ms6bJzKTm6ITA50opwn/j9v3QUHRA5phqBEOunVWwdHzzQLEkwJnPY6iszSHpGltis3I09Ccd9izUr4ngliFnbxGOGQbkOufNvrdR8asFn3JrfOBGcdTPCDeQXK6bAgMBAAEwD
// QYJKoZIhvcNAQELBQADggEBAFwc0dZv3WkgivUyFOGQ1QX27+nXuovDupF2D6XsTCHlR1a3G05/D5t7QC5wq/gRGSBpx/rOyUTgpb6qBccMimHfezrsq42pdcXOJ+hUnPFoHiAuZ+cVTtB
// hb/Chqi0kMMKrFH4KTU1b/GpF9+aS0BweiD/VSSLKeQ1rFRl9UTJO0rONU0jpMS4JCzSpKJsM7bnFb6So7GOaREDv57cy39zk2GD/gZe6p3+lACe990qC/Sn8e915YS/BFOOxjouS1m
// mnelqAQ3UN/LqcypJssQICYhThQkzckSddBLEIvNJ7TWG70RRCkRwDlLsPr5WXqAreqLqGXuvYRuMsRohNOtQ="],"x5t":"iDJ7j3I-Xep7_Xem1bcI9u5uR98","x5t#S256"
// :"1LhIY1WY_ZrveTZMNtJX7m_KEXzvJYkhTMq3OD2OZHk"}],"lastTimeRequesTime":1609865714.12},
// "verifyTokenAudience":false},"stores":[{},{"store":{"_events":{},"_eventsCount":0,"sessions":{}}}]}