package com.AuthLaunchPad.backend.Controller;

import com.AuthLaunchPad.backend.UserDTO;
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.keycloak.representations.AccessTokenResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    final String authServerUrl = "http://localhost:8080/auth";
    final String realm = "baby-yoda";
    final String clientId = "react-spring-postgresql";
    final String clientSecret = "44a25174-62a2-4909-8053-b7ab04f35f06";


    @PostMapping(path = "/signin")
    public ResponseEntity<?> signin(@RequestBody UserDTO userDTO) {

        Map<String, Object> clientCredentials = new HashMap<>();
        clientCredentials.put("secret", clientSecret);
        clientCredentials.put("grant_type", "password");

        Configuration configuration =
                new Configuration(authServerUrl, realm, clientId, clientCredentials, null);
        AuthzClient authzClient = AuthzClient.create(configuration);

        AccessTokenResponse response =
                authzClient.obtainAccessToken(userDTO.getEmail(), userDTO.getPassword());

        return ResponseEntity.ok(response);
    }


    @GetMapping(value = "/")
    public String getName() {
        return "Hello, this api is not protected.";
    }


    @GetMapping(value = "/users")
    public String getEmail() {
        return "Hello, this api is protected.";
    }

}