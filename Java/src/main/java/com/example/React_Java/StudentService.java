package com.example.React_Java;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;  // Assuming you have a repository for data access

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
