import React from "react";
import CandidateCard from "./CandidateCard";
import './Candidates.css';

//Här hämta in alla kandidater och mapa igenom dem, skicka ner som props till CandidateCard

function Candidates() {

    return (
        <div className="Candidates container">
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
        </div>
    )
}

export default Candidates