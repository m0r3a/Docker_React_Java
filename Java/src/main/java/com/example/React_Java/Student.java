package com.example.React_Java;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
public class Student {
    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private int age;
    private boolean isWorking;
    enum Grade { FirstYEAR, SecondYEAR, ThirdYEAR, FourthYEAR };
    private Grade gradeLevel;

    public Student(){}

    public Student(String firstName, String lastName, int age, boolean isWorking, Grade gradeLevel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isWorking = isWorking;
        this.gradeLevel = gradeLevel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(id, student.id) &&
                Objects.equals(firstName, student.firstName) &&
                Objects.equals(lastName, student.lastName) &&
                Objects.equals(age, student.age) &&
                Objects.equals(isWorking, student.isWorking) &&
                Objects.equals(gradeLevel, student.gradeLevel);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, age, isWorking, gradeLevel);
    }



    @Override
    public String toString() {
        return "Student{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", isWorking: " + isWorking +
                ", gradeLevel=" + gradeLevel +
                '}';
    }
}
