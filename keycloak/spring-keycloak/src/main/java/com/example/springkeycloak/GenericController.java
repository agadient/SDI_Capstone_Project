package com.example.springkeycloak;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GenericController {

    @GetMapping("/")
    public String getIndex(){
        return "Public Data";
    }

    @GetMapping("/user")
    public String getUserData(){
        return "Private Data";
    }
}
