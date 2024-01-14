import React, { useState } from 'react';
import Student from './Student';
import axios from 'axios';



function StudentList({ students, setStudents }) {
  const [isNewStudentFormVisible, setNewStudentFormVisible] = useState(false);
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    age: '',
    working: false,
    gradeLevel: 'FirstYEAR',
  });

  const handleAddStudent = () => {
    setNewStudentFormVisible(!isNewStudentFormVisible);
  };

  const handleCloseForm = () => {
    setNewStudentFormVisible(false);
    setNewStudent({
      firstName: '',
      lastName: '',
      age: '',
      working: false,
      gradeLevel: 'FirstYEAR',
    });
  };

  const handleSaveStudent = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/students', newStudent);
      setStudents((prevStudents) => [...prevStudents, response.data]);
      handleCloseForm(); // Close the form after successfully saving a new student
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Working</th>
          <th>Grade Level</th>
          <th>
            {isNewStudentFormVisible ? (
              <>
                <button onClick={handleCloseForm}>Close</button>
              </>
            ) : (
              <button onClick={handleAddStudent}>
                {isNewStudentFormVisible ? 'Close' : 'Add Student'}
              </button>
            )}
          </th>
        </tr>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
        {isNewStudentFormVisible && (
          <tr>
            <td>
              <input type="text" name="firstName" value={newStudent.firstName} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="lastName" value={newStudent.lastName} onChange={handleChange} />
            </td>
            <td>
              <input type="number" name="age" value={newStudent.age} onChange={handleChange} />
            </td>
            <td>
              <select name="working" value={newStudent.working} onChange={handleChange}>
                <option value={true}>Is working</option>
                <option value={false}>Is not working</option>
              </select>
            </td>
            <td>
              <select name="gradeLevel" value={newStudent.gradeLevel} onChange={handleChange}>
                <option value="FirstYEAR">FirstYEAR</option>
                <option value="SecondYEAR">SecondYEAR</option>
                <option value="ThirdYEAR">ThirdYEAR</option>
                <option value="FourthYEAR">FourthYEAR</option>
              </select>
            </td>
            <td>
              {/* Display the "Save" button */}
              <button onClick={handleSaveStudent}>Save</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default StudentList;
