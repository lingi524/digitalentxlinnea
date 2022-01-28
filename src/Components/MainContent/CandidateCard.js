import React from "react";
import './Candidates.css';
import '../../App.css';



function CandidateCard(props) {

    const RemoveCandidate = (id) => {
        //Take all the IDs that DON'T match the seletec Id, add those back into
        const updateCandidates = props.candidates.filter((t) => t.id !== id);
        props.setCandidates(updateCandidates); 
    };

    return (
        <div className="CandidateCard">
            <div>
                <button onClick={() => RemoveCandidate(props.candidate.id)} className="removeCandidate"> </button>
            </div>
            <div className="CandidateInfo">
                <div className="NameAge">
                    <h2>{props.candidate.name}, </h2>
                    <p className="Age">{props.candidate.age} år</p> 
                </div>
                
                <a href={"mailto:" + props.candidate.email}>{props.candidate.email}</a>
                <div>
                    <p>{props.candidate.adress}</p>
                </div>
                <div>
                    <p>{props.candidate.process}</p>
                </div> 
            </div>
        </div>
    )
}

export default CandidateCard