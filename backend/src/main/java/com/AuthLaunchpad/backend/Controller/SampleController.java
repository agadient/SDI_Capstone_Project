package com.AuthLaunchpad.backend.Controller;


import com.AuthLaunchpad.backend.Model.Sample;
import com.AuthLaunchpad.backend.View.SampleRepository;
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

    @GetMapping("/readDB")
    public Iterable<Sample> all() {
        return this.repository.findAll();
    }


    @PostMapping("/writeDB")
    public Sample create(@RequestBody Sample sample){
        return this.repository.save(sample);
    }
}