package com.example.React_Java;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }

    @PatchMapping("/students/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student updatedStudent) {
        return studentService.updateStudent(id, updatedStudent);
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student newStudent) {
        return studentService.addStudent(newStudent);
    }
}
