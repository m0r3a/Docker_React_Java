FROM openjdk:19-jdk-alpine

WORKDIR /java

COPY . .

RUN ./mvnw clean install

EXPOSE 8080

CMD ["./mvnw", "spring-boot:run"]