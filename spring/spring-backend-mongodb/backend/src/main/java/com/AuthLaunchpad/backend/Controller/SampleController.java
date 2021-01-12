package com.AuthLaunchpad.backend.Controller;

import com.AuthLaunchpad.backend.Model.ParsedJWT;
import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.AuthLaunchpad.backend.Model.Sample;
import com.AuthLaunchpad.backend.View.SampleRepository;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class SampleController {

    @Autowired
    SampleRepository repository;

    public SampleController(SampleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/readDB")
    public ResponseEntity<List<Sample>> all(@RequestParam(required = false) String sampleData) {
        try {
            List<Sample> sample = new ArrayList<Sample>();
            if (sampleData == null)
                this.repository.findAll().forEach(sample::add);
            if (sample.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(sample, HttpStatus.OK);
        }
        catch(Exception error){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/writeDB")
    public ResponseEntity<Sample> createSample(@RequestBody Sample sample){
        try {
            Sample _sample = repository.save(new Sample(sample.getSampleData()));
            return new ResponseEntity<>(_sample, HttpStatus.CREATED);
        }catch(Exception error){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/parseJWT")
    public String token(@RequestHeader("Authorization") String header){
        ParsedJWT p = new ParsedJWT(header);
        Gson gson = new Gson();
        String json = gson.toJson(p);
        return json;
    }
}