package com.AuthLaunchpad.backend.Controller;


import com.AuthLaunchpad.backend.Model.Sample;
import com.AuthLaunchpad.backend.View.SampleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
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
        MockHttpServletRequestBuilder request = get("/readDB")
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
        MockHttpServletRequestBuilder request = post("/writeDB")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"sampleData\": \"this is sample data\"}");

        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", equalTo(2)))
                .andExpect(jsonPath("$.sampleData", equalTo("this is sample data"))
                );
    }

    @Test
    public void getToken() throws Exception{
        String accessToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDc0ODA2NDgsImlhdCI6MTYwNzQ3OTc0OCwiYXV0aF90aW1lIjoxNjA3NDc5NzQ4LCJqdGkiOiIwZjI1Mzk4Mi0xMWQ1LTRlMGMtODUxMC1kOTQyN2JhMTYyMGYiLCJpc3MiOiJodHRwczovL2xvZ2luLmRzb3AuaW8vYXV0aC9yZWFsbXMvYmFieS15b2RhIiwiYXVkIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsInN1YiI6ImJlMDY2OTcwLWE3ZWQtNDEyMi04YjA1LTdiYzYzYTdkZDNkZCIsInR5cCI6IklEIiwiYXpwIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsIm5vbmNlIjoiZmNFTE83WmMxcmFtLUVta1dKZFZYNUpaMjJ0V0ppUi1VaWw3MVU0V3prZyIsInNlc3Npb25fc3RhdGUiOiJjYTM5M2I3My02MWRiLTQ2ZjYtOGNhYy0yYzE1ZjM1NmVhNDMiLCJhY3IiOiIxIiwidGVybXNfYW5kX2NvbmRpdGlvbnMiOiIxNTk3MDU1MDQ4IiwiYWZmaWxpYXRpb24iOiJPdGhlciIsIm9yZ2FuaXphdGlvbiI6IlJldmFDb21tIiwicmFuayI6Ik4vQSIsInVzZXJjZXJ0aWZpY2F0ZSI6IlVSQU5BS0EuTUlDSEFFTC5CTEFJTkUuMDEyMzQ1Njc4OSIsImdpdmVuX25hbWUiOiJNaWNoYWVsIiwiZmFtaWx5X25hbWUiOiJVcmFuYWthIiwiZW1haWwiOiJtdXJhbmFrYUByZXZhY29tbS5jb20ifQ.kKAIGlWMhkIAFI7dVwz5yYc0DGzR5oS9nuRqHLdFHto";

        MockHttpServletRequestBuilder request = get("/parseJWT")
                .header(HttpHeaders.AUTHORIZATION,accessToken)
                .contentType(MediaType.APPLICATION_JSON);

        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.exp", equalTo(1607480648)))
                .andExpect(jsonPath("$.iat", equalTo(1607479748)))
                .andExpect(jsonPath("$.auth_time", equalTo(1607479748)))
                .andExpect(jsonPath("$.jti", equalTo("0f253982-11d5-4e0c-8510-d9427ba1620f")))
                .andExpect(jsonPath("$.iss", equalTo("https://login.dsop.io/auth/realms/baby-yoda")))
                .andExpect(jsonPath("$.aud", equalTo("platform1_a8604cc9-f5e9-4656-802d-d05624370245_mission-staging-general")))
                .andExpect(jsonPath("$.sub", equalTo("be066970-a7ed-4122-8b05-7bc63a7dd3dd")))
                .andExpect(jsonPath("$.typ", equalTo("ID")))
                .andExpect(jsonPath("$.azp", equalTo("platform1_a8604cc9-f5e9-4656-802d-d05624370245_mission-staging-general")))
                .andExpect(jsonPath("$.nonce", equalTo("fcELO7Zc1ram-EmkWJdVX5JZ22tWJiR-Uil71U4Wzkg")))
                .andExpect(jsonPath("$.session_state", equalTo("ca393b73-61db-46f6-8cac-2c15f356ea43")))
                .andExpect(jsonPath("$.acr", equalTo("1")))
                .andExpect(jsonPath("$.terms_and_conditions", equalTo("1597055048")))
                .andExpect(jsonPath("$.affiliation", equalTo("Other")))
                .andExpect(jsonPath("$.organization", equalTo("RevaComm")))
                .andExpect(jsonPath("$.rank", equalTo("N/A")))
                .andExpect(jsonPath("$.usercertificate", equalTo("URANAKA.MICHAEL.BLAINE.0123456789")))
                .andExpect(jsonPath("$.given_name", equalTo("Michael")))
                .andExpect(jsonPath("$.family_name", equalTo("Uranaka")))
                .andExpect(jsonPath("$.email", equalTo("muranaka@revacomm.com")));

    }
}