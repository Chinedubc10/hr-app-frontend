import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';

const EmployeeDirectory = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const loadStaff = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/employees');
        setStaffList(data);
      } catch (err) {
        console.error('Could not retrieve employee data:', err);
      }
    };

    loadStaff();
  }, []);

  const addEmployeeToList = (employee) => {
    setStaffList((currentList) => [...currentList, employee]);
  };

  return (
    <div className="container">
      {staffList.map((person) => (
        <PersonCard key={person.id} employee={person} />
      ))}
    </div>
  );
};

export default EmployeeDirectory;