References used: 

    https://www.thomasvitale.com/spring-boot-keycloak-security/
        NOTE: Ignore step 4, older version had these issues
    https://mvnrepository.com/artifact/org.keycloak/keycloak-spring-boot-starter/12.0.1
    https://www.keycloak.org/docs/latest/securing_apps/index.html#_spring_boot_adapter
    

SETUP: 
Spring Boot, Gradle w/ web

Used Gradle since I am now familiar with it more so than Maven

Setup on port 8888 using main/resources/application.properties as my chrome insisted on rediercting to a default keycloak instance before I chaneg the port of 8080

added the following to the build.gradle for dependency:

    // Keycloak
    compile group: 'org.keycloak', name: 'keycloak-spring-boot-starter', version: '12.0.1'
    
Rebuild gradle project (if auto-rebuild isnt already on)
Setup gradle project configuration, defaults with only project folder added

Setup two routes:
    - One index that is good for all (DISPLAY: "Public Data")
    - One /user for if authorized user (DISPLAY: "Private Data")

Verified both routes prior to adding any keycloak authorization. Both routes displayed.

Added the following to the main/resources/application.properties

    keycloak.realm=baby-yoda
    keycloak.resource=spring-keycloak-example
    keycloak.auth-server-url=http://localhost:5555/auth
    keycloak.ssl-required=external
    keycloak.public-client=true
    
Added a client in keycloak using resource name above as the clientid and the type is public instead of bearer-only like in the express example. RootURL will be localhost:8888 or whatever port the spring app is on (default 8080)

Now add this to  main/resources/application.properties to protect the route:
keycloak.security-constraints[0].authRoles[0]=user
keycloak.security-constraints[0].securityCollections[0].patterns[0]=/user/*



