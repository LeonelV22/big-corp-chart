import EmployeesChartAPI from './EmployeesChartAPI';

const fetchEmployeeById = id => EmployeesChartAPI({ id });

const fetchEmployeesByManager = managerId => EmployeesChartAPI({ manager: managerId });

export {
    fetchEmployeeById,
    fetchEmployeesByManager
};
