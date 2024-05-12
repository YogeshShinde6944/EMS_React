import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import EmployeeComponent from "./component/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3009/ */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/employee" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
