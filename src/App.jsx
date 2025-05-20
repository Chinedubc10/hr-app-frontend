import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';


import Header from './Header';
import Footer from './Footer';
import PersonList from './PersonList';
import AddEmployee from './AddEmployee';
import About from './About';

import './styles/App.css';

const App = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3001/employees');
        setEmployeeList(res.data);
      } catch (err) {
        console.error('❌ Error fetching employees:', err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Router>
      <Header />

      <main>
        <Routes>
         
          <Route 
            path="/" 
            element={<PersonList employees={employeeList} />} 
          />

          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/add" 
            element={
              <AddEmployee 
                onAddEmployee={setEmployeeList} 
              />
            } 
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
