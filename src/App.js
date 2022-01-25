import React, {useState} from 'react';
import './App.css';
import Candidates from './Components/MainContent/Candidates';
import NavBar from './Components/NavBar/NavBar';

function App() {
  
  const [inputName, setInputName] = useState("");

  return (
    <div className="App">
      <NavBar />
      <Candidates />
    </div>
  );
}

export default App;
