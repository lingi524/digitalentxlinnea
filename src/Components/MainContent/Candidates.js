import React from "react";
import CandidateCard from "./CandidateCard";
import './Candidates.css';

function Candidates({candidates, setCandidates}) {

    return (
        <div className="MainReadContent">
            <div className="Candidates container">
                {candidates.map((candidate)=> (
                    <CandidateCard key={candidate.email}
                    candidate={candidate} candidates={candidates} setCandidates={setCandidates}/>
                ))}
            </div>

        </div>
    )
}

export default Candidates