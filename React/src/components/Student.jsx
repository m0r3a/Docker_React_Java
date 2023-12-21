import React from 'react';

function Student({ student }) {
  function isWorking(temp){
    if(temp) return "Is working.";
    else return "Is not working.";
  }

  return (
    <tr>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.age}</td>
      <td>{isWorking(student.working)}</td>
      <td>{student.gradeLevel}</td>
    </tr>
  );
}

export default Student;
