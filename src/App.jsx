import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import employeesData from './data/employees';
import PersonList from './PersonList';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import AddEmployee from './AddEmployee';
import './styles/App.css';
 
const App = () => {
  const [employees, setEmployees] = useState(employeesData);
 
  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };
 
  return (
<Router>
<Header />
<Routes>
<Route path="/" element={<PersonList employees={employees} />} />
<Route path="/about" element={<About />} />
<Route
          path="/add"
          element={<AddEmployee onAddEmployee={handleAddEmployee} />}
        />
</Routes>
<Footer />
</Router>
  );
};
 
export default App;