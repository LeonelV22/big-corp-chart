import React from 'react';
import Employee from './Employee';

const EmployeesList = React.memo(({ employees = [] }) => {

    if (employees.length === 0) {
        return null
    }
    return (
        <div className='EmployeeContainer'>
            {
                employees.map(employee => <Employee key={employee.id} employee={employee} />)
            }
        </div>
    );
})


export default EmployeesList