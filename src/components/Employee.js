import React, { useState, useCallback }  from 'react';
import './Employee.scss';

import { fetchEmployeesByManager } from '../servicies/employees';
import EmployeesList from './EmployeesList';

export default ({ employee }) => {
    const [employees, setEmployees] = useState([]);
    const [isFetching, setIsFetching] = useState(false)

    const fetchEmployees = useCallback(async () => {
        setIsFetching(true)
        const result = await fetchEmployeesByManager(employee.id)
        setEmployees(result)
        setIsFetching(false)
    }, [employee.id, setEmployees])

    return (
       <React.Fragment>

            <div className='EmployeeContainer__Employee' onClick={fetchEmployees}>
                {employee.first} {employee.last}
            </div>
           
            { isFetching ? 'loading...' : <EmployeesList employees={employees} /> }
            
        </React.Fragment>
    )
}