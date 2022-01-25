import React from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import './App.css';
import Candidates from './Components/MainContent/Candidates';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [candidateInfo, setCandidateInfo ] = useLocalStorage('candidateInfo', [
    {
      id: 0,
      name: 'Lisa Larsson',
      age: 25,
      email: 'lisa.larsson@gmail.com',
      adress: 'Adress adress adress',
      partOfProcess: 'Kontaktad'
  },
  {
    id: 1,
    name: 'Lisa Svensson',
    age: 85,
    email: 'lisa.svenson@gmail.com',
    adress: 'Adress adress adress',
    partOfProcess: 'Intervju'
  }
]);

  // const [inputName, setInputName] = useState("");

  return (
    <div className="App">
      <NavBar candidateInfo={candidateInfo} setCandidateInfo={setCandidateInfo}/>
      <Candidates candidateInfo={candidateInfo} setCandidateInfo={setCandidateInfo}/>
    </div>
  );
}

export default App;
