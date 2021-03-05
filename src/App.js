import React, { Component } from "react";
import FriendCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
    <Wrapper>
      <Title> Empolyee Directory </Title>
      <EmployeeCard />
    </Wrapper>
  );
}

export default App;
