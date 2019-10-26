import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react'

import Employee from '../components/Employee';

const employeesMocked = {
        first: "Stephen",
        last: "Baker",
        id: 9,
        manager: 0,
        department: 2,
        office: 1
    }
it('renders Employee without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Employee employee={employeesMocked} />, div);

    ReactDOM.unmountComponentAtNode(div);
});
  
it('renders Employee with employee name prop', () => {
    const { queryByText } = render(<Employee employee={employeesMocked} />);
    expect(queryByText('Stephen Baker')).toBeInTheDocument()
});

it('renders Employee with employee without name prop', () => {
    const { queryByText } = render(<Employee employee={{}} />);
    expect(queryByText('Stephen Baker')).toBeNull()
});