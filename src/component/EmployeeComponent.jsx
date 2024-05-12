import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee, useParams } from "../services/EmployeeService.jsx";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  function saveEmployee(e) {
    if (validateForm()) {
      e.preventDefault();
      const employee = { firstName, lastName, email };
      console.log(employee);

      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator("/employee");
      });
    }
  }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };
    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "first name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "email is required";
      valid = false;
    }

    setErrors(errorCopy);

    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {
            pageTitle()
          }
          <div className="card-body">
            <form action="">
              {/* create first name */}

              <div className="form-group mb-2">
                <label className="form-label">First name: </label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              {/* create last name */}
              <div className="form-group mb-2">
                <label className="form-label">Last name: </label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              {/* create email */}
              <div className="form-group mb-2">
                <label className="form-label">Email: </label>
                <input
                  type="text"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
