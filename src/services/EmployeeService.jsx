import axios from "axios";

const restApiBaseUrl = "http://localhost:8181/employee/";

export const listEmployee = () => axios.get(restApiBaseUrl);

export const createEmployee = (employee) => axios.post(restApiBaseUrl, employee);

export const getEmployee=(emploeeId) => axios.get(restApiBaseUrl+emploeeId)

export const updateEmployee=(emploeeId ,employee)=>axios.put(restApiBaseUrl+emploeeId,employee)
