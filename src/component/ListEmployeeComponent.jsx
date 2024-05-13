import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployee } from "../services/EmployeeService.jsx";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  function getAllEmployees() {
    listEmployee()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getAllEmployees();
  }, []);

  const navigator = useNavigate();

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log("employee deleted successfully ..." + id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of employee</h2>
      <button
        type="button"
        className="btn btn-primary mb-2"
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
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                style={{marginLeft:"10px"}}
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
