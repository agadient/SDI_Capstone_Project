package com.AuthLaunchpad.backend.Controller;

import com.AuthLaunchpad.backend.Model.ParsedJWT;
import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.AuthLaunchpad.backend.Model.Sample;
import com.AuthLaunchpad.backend.View.SampleRepository;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class SampleController {

    @Autowired
    SampleRepository repository;

    public SampleController(SampleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/readDB")
    public Iterable<Sample> all() {
        return this.repository.findAll();
    }


    @PostMapping("/writeDB")
    public Sample create(@RequestBody Sample sample){
        return this.repository.save(sample);
    }

    @GetMapping("/parseJWT")
    public String token(@RequestHeader("Authorization") String header){
        ParsedJWT p = new ParsedJWT(header);
        Gson gson = new Gson();
        String json = gson.toJson(p);
        return json;
    }
}