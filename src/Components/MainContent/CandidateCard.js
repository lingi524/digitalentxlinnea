import React from "react";
import './Candidates.css';


function CandidateCard() {

    return (
        <div className="CandidateCard">
            <div>
                <div className="NameAge">
                    <h3>Namn</h3>
                    <p>Ålder</p>
                </div>
                <p>Email</p>
                <div>
                    <p>Adressrad 1</p>
                    <p>Adressrad 2</p>
                    <p>Adressrad 3</p>
                </div>
                <div>
                    <p>Steg i processen</p>
                </div>
            </div>
        </div>
    )
}

export default CandidateCard