package com.AuthLaunchpad.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "sample")
public class Sample {
    @Id

    private String id;
    private String sampleData;

    public Sample() {

    }


    public Sample(String sampleData){
        this.id = id;
        this.sampleData = sampleData;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSampleData() {
        return sampleData;
    }

    public void setSampleData(String sampleData) {
        this.sampleData = sampleData;
    }
}