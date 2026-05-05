import React from 'react';
import ClassBasedComponent from './ClassBasedComponent';
import Register from './Register';

const App = () => {
  return (
    <p>
      <Register />
      <ClassBasedComponent />
      <h1>React App using Vite</h1>
    </p>
  );
};
export default App;