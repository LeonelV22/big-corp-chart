import React, { useState, useEffect } from 'react';
import './App.scss';

import EmployeesList from './components/EmployeesList';
import { fetchEmployeesByManager } from './servicies/employees';

const App = () => {

  const [employees, setEmployees] = useState([]);
 
  const fetchTopLevelEmployee = async () => {
    const result = await fetchEmployeesByManager(0);
    setEmployees([
      result[0]
    ]);
  }

  useEffect(() => {
    fetchTopLevelEmployee()
  }, []);

  return (
    <div className="App">
      <h1 className="App__Header">Big Corp Chart</h1>
        <EmployeesList key={new Date() * Math.random() * 10000} employees={employees} />
    </div>
  );
}

export default App;
