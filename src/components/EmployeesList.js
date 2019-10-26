import React from 'react';
import Employee from './Employee';

const EmployeesList = React.memo(({ employees = [], setEmployees }) => {

    if (employees.length === 0) {
        return null;
    }
    return (
        <React.Fragment>
            
            <div className='EmployeeContainer'>
                {
                    employees.map(employee => <Employee key={employee.id} employee={employee} employees={employees} setEmployees={setEmployees} />)
                }
            </div>
        </React.Fragment>

    );
})


export default EmployeesList