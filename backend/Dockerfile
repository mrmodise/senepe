FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD target/senepe-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
EXPOSE 8088
