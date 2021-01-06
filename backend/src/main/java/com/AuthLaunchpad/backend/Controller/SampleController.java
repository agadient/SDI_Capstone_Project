package com.AuthLaunchPad.backend.Controller;

import com.AuthLaunchPad.backend.Model.Sample;
import com.AuthLaunchPad.backend.View.SampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @Autowired
    SampleRepository repository;

    public SampleController(SampleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/users/data")
    public Iterable<Sample> all() {
        return this.repository.findAll();
    }


    @PostMapping("/users/data")
    public Sample create(@RequestBody Sample sample){
        return this.repository.save(sample);
    }
}
