import React, { useState } from 'react';
import axios from 'axios';

function Student({ student }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const gradeLevels = ["FirstYEAR", "SecondYEAR", "ThirdYEAR", "FourthYEAR"];
  const workingOptions = ["Is working", "Is not working"];

  const handleDelete = async () => {
    try {
      const result = await axios.delete(`http://localhost:8080/api/students/${student.id}`);
      console.log(result);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const result = await axios.patch(`http://localhost:8080/api/students/${student.id}`, editedStudent);
      console.log(result);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent(prevStudent => ({ ...prevStudent, [name]: value }));
  };

  function isWorking(temp) {
    return temp ? "Is working." : "Is not working.";
  }

  return (
    <tr>
      <td>
        {isEditing ? (
          <input type="text" name="firstName" value={editedStudent.firstName} onChange={handleChange} />
        ) : (
          student.firstName
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" name="lastName" value={editedStudent.lastName} onChange={handleChange} />
        ) : (
          student.lastName
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="number" name="age" value={editedStudent.age} onChange={handleChange} />
        ) : (
          student.age
        )}
      </td>
      <td>
        {isEditing ? (
          <select name="working" value={editedStudent.working} onChange={handleChange}>
            {workingOptions.map((option) => (
              <option key={option} value={option === "Is working"}>{option}</option>
            ))}
          </select>
        ) : (
          isWorking(student.working)
        )}
      </td>
      <td>
        {isEditing ? (
          <select name="gradeLevel" value={editedStudent.gradeLevel} onChange={handleChange}>
            {gradeLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        ) : (
          student.gradeLevel
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Student;
