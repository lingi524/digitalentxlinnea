import React from "react";
import AddNewButton from "./AddNewButton";
import Search from "./Search";
import './NavBar.css';
import '../../App.css';

function NavBar({candidateInfo, setCandidateInfo}) {

    return (
        <div className="NavBarBackground">
            <div className="container NavBarContainer">
                <p>Rekrytering</p>
                <div className="NavButtonsContainer">
                    <Search />
                    <AddNewButton candidateInfo={candidateInfo} setCandidateInfo={setCandidateInfo}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar