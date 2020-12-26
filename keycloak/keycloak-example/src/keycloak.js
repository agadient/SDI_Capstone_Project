import Keycloak from 'keycloak-js'

const keycloakConfig = {
    realm: 'baby-yoda',
    url: 'http://localhost:5555/auth/',
    clientId: 'react-keycloak-example',
    
}

const keycloak = new Keycloak(keycloakConfig);
export default keycloak