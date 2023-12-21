import React from 'react';
import Student from './Student';

function StudentList({ students }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Working</th>
          <th>GradeLevel</th>
        </tr>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
