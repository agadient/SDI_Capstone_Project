token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTAwNTU4MzIsImlhdCI6MTYwNzQ3OTc0OCwiYXV0aF90aW1lIjoxNjA3NDc5NzQ4LCJqdGkiOiIwZjI1Mzk4Mi0xMWQ1LTRlMGMtODUxMC1kOTQyN2JhMTYyMGYiLCJpc3MiOiJodHRwczovL2xvZ2luLmRzb3AuaW8vYXV0aC9yZWFsbXMvYmFieS15b2RhIiwiYXVkIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsInN1YiI6ImJlMDY2OTcwLWE3ZWQtNDEyMi04YjA1LTdiYzYzYTdkZDNkZCIsInR5cCI6IklEIiwiYXpwIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsIm5vbmNlIjoiZmNFTE83WmMxcmFtLUVta1dKZFZYNUpaMjJ0V0ppUi1VaWw3MVU0V3prZyIsInNlc3Npb25fc3RhdGUiOiJjYTM5M2I3My02MWRiLTQ2ZjYtOGNhYy0yYzE1ZjM1NmVhNDMiLCJhY3IiOiIxIiwidGVybXNfYW5kX2NvbmRpdGlvbnMiOiIxNTk3MDU1MDQ4IiwiYWZmaWxpYXRpb24iOiJPdGhlciIsIm9yZ2FuaXphdGlvbiI6IlJldmFDb21tIiwicmFuayI6Ik4vQSIsInVzZXJjZXJ0aWZpY2F0ZSI6IlVSQU5BS0EuTUlDSEFFTC5CTEFJTkUuMDEyMzQ1Njc4OSIsImdpdmVuX25hbWUiOiJNaWNoYWVsIiwiZmFtaWx5X25hbWUiOiJVcmFuYWthIiwiZW1haWwiOiJtdXJhbmFrYUByZXZhY29tbS5jb20ifQ.u0JD1TAvgaAL3klfjUPOZ7h9o3nk4bNr41sfmmtOvLM"
tokenParse = {"exp": 1607480648, 
"iat": 1607479748, 
"auth_time": 1607479748, 
"jti": "0f253982-11d5-4e0c-8510-d9427ba1620f",
"iss": "https://login.dsop.io/auth/realms/baby-yoda", 
"aud": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_mission-staging-general", 
"sub": "be066970-a7ed-4122-8b05-7bc63a7dd3dd", // Keycloak ID
"typ": "ID", 
"azp": "platform1_a8604cc9-f5e9-4656-802d-d05624370245_mission-staging-general", 
"nonce": "fcELO7Zc1ram-EmkWJdVX5JZ22tWJiR-Uil71U4Wzkg", 
"session_state": "ca393b73-61db-46f6-8cac-2c15f356ea43", 
"acr": "1", 
"terms_and_conditions": "1597055048", 
"affiliation": "Other", 
"organization": "RevaComm", 
"rank": "N/A", 
"usercertificate": "URANAKA.MICHAEL.BLAINE.0123456789",  // this is only set if you have a CAC
"given_name": "Michael", 
"family_name": "Uranaka", 
"email": "muranaka@revacomm.com"}

module.exports = {
    token,
    tokenParse
}
