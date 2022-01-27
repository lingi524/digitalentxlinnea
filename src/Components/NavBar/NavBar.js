import React from "react";
import AddNewButton from "./AddNewButton";
// import Search from "./Search";
import './NavBar.css';
import '../../App.css';

function NavBar({candidates, setCandidates}) {

    return (
        <div className="NavBarBackground">
            <div className="container NavBarContainer">
                <p>Rekrytering</p>
                <div className="NavButtonsContainer">
                    {/* <Search /> */}
                    <AddNewButton candidates={candidates} setCandidates={setCandidates}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar