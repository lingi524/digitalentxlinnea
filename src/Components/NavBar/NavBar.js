import React from "react";
import AddNewButton from "./AddNewButton";
import Search from "./Search";
import './NavBar.css';
import '../../App.css';

function NavBar() {

    return (
        <div className="NavBarBackground">
            <div className="container NavBarContainer">
                <p>Rekrytering</p>
                <div className="NavButtonsContainer">
                    <Search />
                    <AddNewButton />
                </div>
            </div>
        </div>
    )
}

export default NavBar