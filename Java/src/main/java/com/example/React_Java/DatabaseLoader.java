package com.example.React_Java;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final StudentRepository repository;

    public DatabaseLoader(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
            this.repository.save(new Student("Frodo", "Baggins", 19,false, Student.Grade.FourthYEAR));
            this.repository.save(new Student("Danu", "Libor", 29,true, Student.Grade.SecondYEAR));
            this.repository.save(new Student("Andrei", "Rezin", 20,true, Student.Grade.FirstYEAR));
    }
}