import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AddEmployee.css';
 
const AddEmployee = ({ onAddEmployee }) => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        salary: '',
        phone: '',
        email: '',
        animal: '',
        startDate: '',
        location: '',
        department: '',
        skills: ''
    });
 
    const navigate = useNavigate();
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
 
        const newEmployee = {
            id: Date.now(),
            ...formData,
            salary: parseInt(formData.salary),
            skills: formData.skills.split(',').map(skill => skill.trim())
        };
 
        onAddEmployee(newEmployee);
        navigate('/');
    };
 
    return (
<div className="form-wrapper">
<h2 className="form-title">Add New Employee</h2>
<form onSubmit={handleSubmit} className="employee-form">
                {[
                    ['name', 'Name'],
                    ['title', 'Title'],
                    ['salary', 'Salary (EUR)'],
                    ['phone', 'Phone'],
                    ['email', 'Email'],
                    ['animal', 'Favorite Animal'],
                    ['startDate', 'Start Date'],
                    ['location', 'Location'],
                    ['department', 'Department'],
                    ['skills', 'Skills (comma-separated)']
                ].map(([field, label]) => (
<div className="form-group" key={field}>
<label htmlFor={field}>{label}</label>
<input
                            type={field === 'startDate' ? 'date' : 'text'}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                        />
</div>
                ))}
 
                <button type="submit" className="submit-btn">Add Employee</button>
</form>
</div>
    );
};
 
export default AddEmployee;