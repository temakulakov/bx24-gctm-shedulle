import React from 'react';
import './App.css';
import {useLocation} from 'react-router-dom';


function App() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchQuery = query.get('userId'); // Получение значения параметра query
  return (
    <div className="App">
      <h1>{searchQuery}</h1>
    </div>
  );
}

export default App;
