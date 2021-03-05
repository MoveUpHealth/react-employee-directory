import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import TableTitle from "./components/TableTitle";
import Col from "./components/Col"
import employees from "./employee.json"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title> Empolyee Directory </Title>
        <TableTitle>
          <Col size="2"><h2 className="tableTitle">Image</h2> </Col>
          <Col size="1"><h2 className="tableTitle">Id</h2> </Col>
          <Col size="2"><h2 className="tableTitle">Name</h2> </Col>
          <Col size="2"><h2 className="tableTitle">Role</h2> </Col>
          <Col size="2"><h2 className="tableTitle">Department</h2> </Col>
          <Col size="2"><h2 className="tableTitle">Email</h2> </Col>
          <Col size="1"><h2 className="tableTitle">Ext</h2> </Col>
        </TableTitle>
      
      </Wrapper>
    );
  }
}

export default App;
