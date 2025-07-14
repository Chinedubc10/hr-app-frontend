import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/AddEmployee.css";

const AddEmployee = ({ onAddEmployee }) => {
  const navigate = useNavigate();

  const initialFormState = {
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const skillsList = formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);

    const newEmployee = {
      ...formData,
      id: Date.now(),
      salary: parseFloat(formData.salary),
      skills: skillsList,
    };

    try {
      await axios.post(
        "https://hr-app-backend-b85w.onrender.com/employees",
        newEmployee
      );
      onAddEmployee(newEmployee);
      setFormData(initialFormState);
      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("❌ Failed to add employee. Please try again.");
    }
  };

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Title", name: "title", type: "text" },
    { label: "Salary (€)", name: "salary", type: "number" },
    { label: "Phone", name: "phone", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Favorite Animal", name: "animal", type: "text" },
    { label: "Start Date", name: "startDate", type: "date" },
    { label: "Location", name: "location", type: "text" },
    { label: "Department", name: "department", type: "text" },
    { label: "Skills (comma-separated)", name: "skills", type: "text" },
  ];

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Add New Employee</h2>
      <form className="employee-form" onSubmit={handleFormSubmit}>
        {formFields.map(({ label, name, type }) => (
          <div className="form-group" key={name}>
            <label htmlFor={name}>{label}:</label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">
          ➕ Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
