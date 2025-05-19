import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import Header from './Header';
import Footer from './Footer';
import AddEmployee from './AddEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import About from './About';
 
const App = () => {
  const [employees, setEmployees] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3001/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);
 
  return (
<Router>
<Header />
<Routes>
<Route path="/" element={<PersonList employees={employees} />} />
<Route path="/about" element={<About />} />
<Route path="/add" element={<AddEmployee onAddEmployee={setEmployees} />} />
        {/* Add About page etc. here */}
</Routes>
<Footer />
</Router>
  );
};
 
export default App;