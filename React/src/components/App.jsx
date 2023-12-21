import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/students');
      const studentss = result.data;
      setStudents(studentss);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 


    const intervalId = setInterval(() => {
      fetchData();
    }, 100); 

    
    return () => clearInterval(intervalId);
  }, []); 

  return <StudentList students={students} />;
}

export default App;
