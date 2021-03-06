import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeRow from "./components/EmployeeRow";
import TableTitle from "./components/TableTitle";
import Col from "./components/Col"
import employees from "./employee.json"
import "./index.css";

function App () {
  
  const [employeeState, setEmployeeState] = useState([{employees}])

  const [sortType, setSortType] = useState('id');

  useEffect(() => {
    const sortArray = type => {
      const sorted = [...employees].sort((a, b) => a[type] > b[type] ? 1: -1)
      setEmployeeState(sorted)
    }

    sortArray(sortType)
    }, [sortType])

    
    return (
      <Wrapper>
        <Title> Empolyee Directory </Title>
        <TableTitle>
          <Col size="2"><h2 className="tableTitle">Image</h2> </Col>
          <Col size="1"><h2 className="tableTitle">Id</h2> </Col>
          <Col size="2"><button value="name" onClick={(e) => setSortType(e.target.value)} className="tableTitle">Name</button> </Col>
          <Col size="2"><button value="role" onClick={(e) => setSortType(e.target.value)} className="tableTitle">Role</button> </Col>
          <Col size="2"><button value="department" onClick={(e) => setSortType(e.target.value)} className="tableTitle">Department</button> </Col>
          <Col size="2"><h2 className="tableTitle">Email</h2> </Col>
          <Col size="1"><h2 className="tableTitle">Ext</h2> </Col>
        </TableTitle>
        {employeeState.map((employee) => (
          <EmployeeRow
          key={employee.id}
          id={employee.id}
          name={employee.name}
          image={employee.image}
          role={employee.role}
          department={employee.department}
          email={employee.email}
          extension={employee.extension}
          />
        ))}
      
      </Wrapper>
    );
}

export default App;
