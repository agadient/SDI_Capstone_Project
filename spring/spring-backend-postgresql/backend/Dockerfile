FROM registry.il2.dso.mil/platform-one/devops/pipeline-templates/base-image/harden-headless-jdk11:1.11.232
USER appuser

COPY build/libs/backend-0.0.1-SNAPSHOT.jar /app/

ENTRYPOINT ["java", "-jar", "/app/backend-0.0.1-SNAPSHOT.jar"]