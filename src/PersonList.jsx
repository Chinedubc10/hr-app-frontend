import { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";

const PersonList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://hr-app-backend-b85w.onrender.com/employees"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  return (
    <div className="container">
      {employees.map((employee) => (
        <PersonCard
          key={employee.id}
          employee={employee}
          onUpdate={handleUpdateEmployee}
        />
      ))}
    </div>
  );
};

export default PersonList;
