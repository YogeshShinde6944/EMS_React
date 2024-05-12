import axios from "axios";

const restApiBaseUrl = "http://localhost:8181/employee/";

export const listEmployee = () => axios.get(restApiBaseUrl);

export const createEmployee = (employee) => axios.post(restApiBaseUrl, employee);
