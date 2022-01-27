import React from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import './App.css';
import Candidates from './Components/MainContent/Candidates';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [candidates, setCandidates ] = useLocalStorage('candidates', [
    {
      id: 0,
      name: 'Lisa Larsson',
      age: 25,
      email: 'lisa.larsson@gmail.com',
      adress: 'Adress adress adress',
      process: 'Kontaktad'
  },
  {
    id: 1,
    name: 'Lisa Svensson',
    age: 85,
    email: 'lisa.svenson@gmail.com',
    adress: 'Adress adress adress',
    process: 'Intervju'
  }
]);


  // const [inputName, setInputName] = useState("");

  return (
    <div className="App">
      <NavBar candidates={candidates} setCandidates={setCandidates}/>
      <Candidates candidates={candidates} setCandidates={setCandidates}/>
    </div>
  );
}

export default App;
