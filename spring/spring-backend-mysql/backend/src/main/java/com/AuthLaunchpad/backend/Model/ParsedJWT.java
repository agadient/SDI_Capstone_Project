package com.AuthLaunchpad.backend.Model;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ParsedJWT {

    private Long exp;
    private Long iat;
    private Long auth_time;
    private String jti;
    private String iss;
    private String aud;
    private String sub;
    private String typ;
    private String azp;
    private String nonce;
    private String session_state;
    private String acr;
    private String terms_and_conditions;
    private String affiliation;
    private String organization;
    private String rank;
    private String usercertificate;
    private String given_name;
    private String family_name;
    private String email;


    public ParsedJWT(String header) {
        DecodedJWT decoded = JWT.decode(header.split(" ")[1]);
        this.exp = (decoded.getClaim("exp").asLong());
        this.iat = (decoded.getClaim("iat").asLong());
        this.auth_time = (decoded.getClaim("auth_time").asLong());
        this.jti = (decoded.getClaim("jti").asString());
        this.iss = (decoded.getClaim("iss").asString());
        this.aud = (decoded.getClaim("aud").asString());
        this.sub = (decoded.getClaim("sub").asString());
        this.typ = (decoded.getClaim("typ").asString());
        this.azp = (decoded.getClaim("azp").asString());
        this.nonce = (decoded.getClaim("nonce").asString());
        this.session_state = (decoded.getClaim("session_state").asString());
        this.acr = (decoded.getClaim("acr").asString());
        this.terms_and_conditions = (decoded.getClaim("terms_and_conditions").asString());
        this.affiliation = (decoded.getClaim("affiliation").asString());
        this.organization = (decoded.getClaim("organization").asString());
        this.rank = (decoded.getClaim("rank").asString());
        this.usercertificate = (decoded.getClaim("usercertificate").asString());
        this.given_name = (decoded.getClaim("given_name").asString());
        this.family_name = (decoded.getClaim("family_name").asString());
        this.email = (decoded.getClaim("email").asString());
    }


    //Getters and Setters for app implementation if needed.
//    @JsonProperty("exp")
//    public Long getExp() {
//        return exp;
//    }
//    @JsonProperty("exp")
//    public void setExp(Long exp) {
//        this.exp = exp;
//    }
//    @JsonProperty("iat")
//    public Long getIat() {
//        return iat;
//    }
//    @JsonProperty("iat")
//    public void setIat(Long iat) {
//        this.iat = iat;
//    }
//    @JsonProperty("auth_time")
//    public Long getAuth_time() {
//        return auth_time;
//    }
//    @JsonProperty("auth_time")
//    public void setAuth_time(Long auth_time) {
//        this.auth_time = auth_time;
//    }
//    @JsonProperty("jti")
//    public String getJti() {
//        return jti;
//    }
//    @JsonProperty("jti")
//    public void setJti(String jti) {
//        this.jti = jti;
//    }
//    @JsonProperty("iss")
//    public String getIss() {
//        return iss;
//    }
//    @JsonProperty("iss")
//    public void setIss(String iss) {
//        this.iss = iss;
//    }
//    @JsonProperty("aud")
//    public String getAud() {
//        return aud;
//    }
//    @JsonProperty("aud")
//    public void setAud(String aud) {
//        this.aud = aud;
//    }
//    @JsonProperty("sub")
//    public String getSub() {
//        return sub;
//    }
//    @JsonProperty("sub")
//    public void setSub(String sub) {
//        this.sub = sub;
//    }
//    @JsonProperty("typ")
//    public String getTyp() {
//        return typ;
//    }
//    @JsonProperty("typ")
//    public void setTyp(String typ) {
//        this.typ = typ;
//    }
//    @JsonProperty("azp")
//    public String getAzp() {
//        return azp;
//    }
//    @JsonProperty("azp")
//    public void setAzp(String azp) {
//        this.azp = azp;
//    }
//    @JsonProperty("nonce")
//    public String getNonce() {
//        return nonce;
//    }
//    @JsonProperty("nonce")
//    public void setNonce(String nonce) {
//        this.nonce = nonce;
//    }
//    @JsonProperty("session_state")
//    public String getSession_state() {
//        return session_state;
//    }
//    @JsonProperty("session_state")
//    public void setSession_state(String session_state) {
//        this.session_state = session_state;
//    }
//    @JsonProperty("acr")
//    public String getAcr() {
//        return acr;
//    }
//    @JsonProperty("acr")
//    public void setAcr(String acr) {
//        this.acr = acr;
//    }
//    @JsonProperty("terms_and_conditions")
//    public String getTerms_and_conditions() {
//        return terms_and_conditions;
//    }
//    @JsonProperty("terms_and_conditions")
//    public void setTerms_and_conditions(String terms_and_conditions) {
//        this.terms_and_conditions = terms_and_conditions;
//    }
//    @JsonProperty("affiliation")
//    public String getAffiliation() {
//        return affiliation;
//    }
//    @JsonProperty("affiliation")
//    public void setAffiliation(String affiliation) {
//        this.affiliation = affiliation;
//    }
//    @JsonProperty("organization")
//    public String getOrganization() {
//        return organization;
//    }
//    @JsonProperty("organization")
//    public void setOrganization(String organization) {
//        this.organization = organization;
//    }
//    @JsonProperty("rank")
//    public String getRank() {
//        return rank;
//    }
//    @JsonProperty("rank")
//    public void setRank(String rank) {
//        this.rank = rank;
//    }
//    @JsonProperty("usercertificate")
//    public String getUsercertificate() {
//        return usercertificate;
//    }
//    @JsonProperty("usercertificate")
//    public void setUsercertificate(String usercertificate) {
//
//        this.usercertificate = usercertificate;
//    }
//    @JsonProperty("given_name")
//    public String getGiven_name() {
//        return given_name;
//    }
//    @JsonProperty("given_name")
//    public void setGiven_name(String given_name) {
//        this.given_name = given_name;
//    }
//    @JsonProperty("family_name")
//    public String getFamily_name() {
//        return family_name;
//    }
//    @JsonProperty("family_name")
//    public void setFamily_name(String family_name) {
//        this.family_name = family_name;
//    }
//    @JsonProperty("email")
//    public String getEmail() {
//        return email;
//    }
//    @JsonProperty("email")
//    public void setEmail(String email) {
//        this.email = email;
//    }
}
