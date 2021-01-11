package com.AuthLaunchpad.backend.Model;

import javax.persistence.*;

@Entity
@Table(name = "Sample")
public class Sample {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sampleData;

    public Sample() {

    }


    public Sample(Long id, String sampleData){
        this.id = id;
        this.sampleData = sampleData;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSampleData() {
        return sampleData;
    }

    public void setSampleData(String sampleData) {
        this.sampleData = sampleData;
    }
}