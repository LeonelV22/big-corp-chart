import React, { useState, useCallback }  from 'react';
import './Employee.scss';

import { fetchEmployeesByManager } from '../servicies/employees';
import EmployeesList from './EmployeesList';

export default React.memo(({ employee }) => {
    const [employees, setEmployees] = useState([]);
    const [isFetching, setIsFetching] = useState(false)

    const fetchEmployees = useCallback(async () => {
        setIsFetching(true)
        const result = await fetchEmployeesByManager(employee.id)
        setEmployees(result)
        setIsFetching(false)
    }, [employee.id, setEmployees])

    return (
        <div className='EmployeeContainer__Employee'>
            <div className='EmployeeContainer__Employee__Name' onClick={fetchEmployees}>{employee.first} {employee.last}</div>
            { isFetching ? 'loading...' : <EmployeesList employees={employees} /> }
        </div>
    )
})