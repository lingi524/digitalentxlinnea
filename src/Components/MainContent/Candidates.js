import React from "react";
import CandidateCard from "./CandidateCard";
import './Candidates.css';
import image from '../../img/star-orange.svg';

function Candidates({candidates, setCandidates}) {

    return (
        <div className="MainReadContent">
            <div className="Title">
                <h1>Alla kandidater</h1>
                <img src={image} width="50" alt="Dekorativ stjärna"></img>
            </div>
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