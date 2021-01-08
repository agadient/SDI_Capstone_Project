package com.AuthLaunchpad.backend.Controller;


import com.AuthLaunchpad.backend.Model.Sample;
import com.AuthLaunchpad.backend.View.SampleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class SampleControllerTest {

    @Autowired
    MockMvc mvc;

    @Autowired
    SampleRepository repository;

    @BeforeEach
    void init() {
        repository.save(new Sample(1L, "Sample Data that has been inserted"));
    }

    @Test
    public void getData() throws Exception{
        MockHttpServletRequestBuilder request = get("/users/data")
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[0]id", equalTo(1)))
                .andExpect(jsonPath("$.[0]sampleData", equalTo("Sample Data that has been inserted"))
                );
    }

    @Test
    @Transactional
     public void postData() throws Exception{
        MockHttpServletRequestBuilder request = post("/users/data")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"sampleData\": \"Postgres is lame\"}");

        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", equalTo(2)))
                .andExpect(jsonPath("$.sampleData", equalTo("Postgres is lame"))
                );
    }
}