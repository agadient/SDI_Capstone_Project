package com.example.springkeycloak;

import org.keycloak.KeycloakSecurityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
public class GenericController {

    private final HttpServletRequest request;

    @Autowired
    public GenericController(HttpServletRequest request) {
        this.request = request;
    }

    @GetMapping("/")
    public String getIndex(){

        return "Public Data";
    }

    @GetMapping("/user")
    public String getUserData(){
        return "Private Data";
    }

    /**
     * The KeycloakSecurityContext provides access to several pieces of information
     * contained in the security token, such as user profile information.
     */
    private KeycloakSecurityContext getKeycloakSecurityContext() {
        return (KeycloakSecurityContext) request.getAttribute(KeycloakSecurityContext.class.getName());
    }

}
