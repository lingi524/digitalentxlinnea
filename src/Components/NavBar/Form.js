import React, {useState} from "react";
// import useLocalStorage from "../../Hooks/useLocalStorage";
import './NavBar.css';
import '../../App.css';


function Form({toggle, setCandidates, candidates}) {

    const [name, setName] =  useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [process, setProcess] = useState('Kontaktad');

    const handleFormSubmit = (e) => {
        let id = candidates.length > 0 ? Math.max(...candidates.map((t) => t.id)) + 1 : 0;
        //Add If-statement, if its not empty, do this:
        setCandidates([...candidates, {id, name, age, email, adress, process}])
    }


    return (
        <div className="popupBox">
            <form className="box" onSubmit={e=>handleFormSubmit(e)}>
            <button onClick={toggle} className="CloseForm">X</button>
                <div className="popupContainer">
                    <label>Namn</label>
                    <input onChange={e => setName(e.target.value)} type="text" name="name" id="textbox_name" value={name}></input>

                    <label>Ålder</label>
                    <input onChange={e => setAge(e.target.value)} type="number" name="age" id="textbox_age" value={age}></input>

                    <label>Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="text" name="email" id="textbox_email" value={email}></input>

                    <label>Adress</label>
                    <input onChange={e => setAdress(e.target.value)} type="text" name="adress" id="textbox_adress" value={adress}></input>

                    <label>Steg i processen</label>
                    <select onChange={e => setProcess(e.target.value)} name="process" id="textbox_process" value={process}>
                        <option value="Kontaktad">Kontaktad</option>
                        <option value="Dialog">Dialog</option>
                        <option value="Intervju">Intervju</option>
                        <option value="Erbjudande">Erbjudande</option>
                        <option value="Avslutad">Avslutad</option>
                    </select>
                    <input type="submit" className="submitButton" id="submitButton"></input>
                </div>
            </form>
        </div>
    )
}

export default Form