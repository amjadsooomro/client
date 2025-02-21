
import './App.css';
import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
const App = () => {
  return (
      <div>
          <h1>MongoDB User Management</h1>
          <UserForm />
          <UserList />
      </div>
  );
};


export default App;
