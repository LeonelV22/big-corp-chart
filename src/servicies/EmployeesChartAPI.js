const host = 'https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api'

export default async (params) => {
    const queryString = new URLSearchParams(params).toString();
    return fetch(`${host}?${queryString}`)
        .then(response => response.json())
        .catch(error => {
            console.error(error);
            return {};
        })
}