package com.AuthLaunchPad.backend.Controller;

import com.c4_soft.springaddons.security.oauth2.test.annotations.WithMockAuthentication;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.is;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;


@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(UserController.class)
public class ControllerTest {

    @Autowired
    MockMvc mvc;

    @Test
    public void getIndex() throws Exception{
        this.mvc.perform(
                get("/")
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockAuthentication(authorities = "user")
    public void getUser() throws Exception{
        this.mvc.perform(
                get("/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(is("Hello, this api is protected.")));
    }

    @Test
    @WithMockAuthentication(authorities = "user")
    public void postSignin() throws Exception{
        String json = "{\n" +
                "  \"email\": \"joel@joel.com\",\n" +
                "  \"password\": \"joel\"\n" +
                "}";
//provide a mock

        this.mvc.perform(
                post("/signin")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.access_token", instanceOf(String.class)))
                .andExpect(jsonPath("$.expires_in", instanceOf(Number.class)))
                .andExpect(jsonPath("$.refresh_expires_in", instanceOf(Number.class)))
                .andExpect(jsonPath("$.refresh_token", instanceOf(String.class)))
                .andExpect(jsonPath("$.token_type", equalTo("bearer")))
                .andExpect(jsonPath("$.not-before-policy", instanceOf(Number.class)))
                .andExpect(jsonPath("$.session_state", instanceOf(String.class)))
                .andExpect(jsonPath("$.scope", instanceOf(String.class)));
    }
    private String getJSON(String path) throws Exception {
        URL url = this.getClass().getResource(path);
        return new String(Files.readAllBytes(Paths.get(url.toURI())));
    }
}
