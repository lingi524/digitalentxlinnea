import React from "react";
// import useLocalStorage from "../../Hooks/useLocalStorage";
import './NavBar.css';


function Form({toggle, setCandidateInfo, candidateInfo}) {

    const candidateHandler = (e) => {
        console.log(e.target.value);
        setCandidateInfo(e.target.value);
    }

    return (
        <div className="popupBox">
            <form className="box">
            <button onClick={toggle}>X</button>
                <div className="popupContainer">
                    <label>Namn</label>
                    <input onChange={candidateHandler} type="text"></input>

                    <label>Ålder</label>
                    <input type="number"></input>

                    <label>Email</label>
                    <input type="text"></input>

                    <label>Adress</label>
                    <input type="text"></input>

                    <label>Steg i processen</label>
                    <select>
                        <option value="kontakt">Kontakt</option>
                        <option value="dialog">Dialog</option>
                        <option value="intervju">Intervju</option>
                        <option value="erbjudande">Erbjudande</option>
                        <option value="avslutad">Avslutad</option>
                        </select>

                    <input type="submit" className="submitButton"></input>
                </div>
            </form>
        </div>
    )
}

export default Form