package com.AuthLaunchPad.backend.Controller;

import com.AuthLaunchPad.backend.Model.Sample;
import com.AuthLaunchPad.backend.View.SampleRepository;
import com.c4_soft.springaddons.security.oauth2.test.annotations.WithMockAuthentication;
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
    void init()
    {
        repository.deleteAll();
        repository.save(new Sample("Sample Data that has been inserted"));
   }

    @Test
    @WithMockAuthentication(authorities = "user")
    public void getData() throws Exception{
        MockHttpServletRequestBuilder request = get("/users/data")
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[0]sampleData", equalTo("Sample Data that has been inserted"))
                );
    }

    @Test
    @WithMockAuthentication(authorities = "user")
    public void postData() throws Exception {
        MockHttpServletRequestBuilder request = post("/users/data")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"sampleData\": \"Postgres is lame\"}");

        this.mvc.perform(request)
                .andExpect(status().is(201))
                .andExpect(jsonPath("$.sampleData", equalTo("Postgres is lame"))
                );
    }
}
