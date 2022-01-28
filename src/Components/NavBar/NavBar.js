import React from "react";
import AddNewButton from "./AddNewButton";
import Search from "./Search";
import './NavBar.css';
import '../../App.css';

function NavBar({candidates, setCandidates, searchTerm, setSearchTerm}) {

    return (
        <div className="NavBarBackground">
            <div className="Container NavBarContainer">
                <p className="Logo">Rekryteringshjälpen</p>
                <div className="NavButtonsContainer">
                    <Search setCandidates={setCandidates} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                    <AddNewButton candidates={candidates} setCandidates={setCandidates} />
                </div>
            </div>
        </div>
    )
}

export default NavBar