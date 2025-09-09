import axios from 'axios';
import './App.css';
import React from 'react';
import TodoList from './components/TodoList.js';


const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
  });
}

function App() {
  return (
    <div className='App'>
      <><h1>Todo List</h1></>
      <h2>what needs to be done?</h2>
      <TodoList />
    </div>  
  );
}

export default App;