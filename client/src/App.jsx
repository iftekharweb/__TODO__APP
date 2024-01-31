import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [msg, setMsg] =useState("");

  useEffect(() => {
    async function getTodos() {
      try {
        const res = await fetch("http://localhost:5000/api/todos");
        const todos = await res.json();
  
        setMsg(todos.message);
      } catch (error) {
        console.log("Problem in fetch 1");
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{msg}</h2>
    </div>
  )
}

export default App;
