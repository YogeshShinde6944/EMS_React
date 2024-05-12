import React, { useEffect, useState } from "react";
import { listEmployee } from "../services/EmployeeService.jsx";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployee()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigator = useNavigate();

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(){
    navigator(`/edit-employee/${id}`)
  }

  return (
    <div className="container">
      <h2 className="text-center">List of employee</h2>
      <button
        type="button"
        class="btn btn-primary mb-2"
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-info" onClick={()=>updateEmployee(employee.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
