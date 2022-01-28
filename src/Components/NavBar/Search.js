import React, {useState} from "react";

function Search({searchTerm, setSearchTerm}) {

console.log(searchTerm);
    return (
        <div className="Search">
            <input placeholder="Tyvärr funkar jag inte än!" type="text" name="name" id="search_name" onChange={e => {setSearchTerm(e.target.value)}}>
            </input>
        </div>
    )
}

export default Search