import React, {useEffect} from "react";
import './Candidates.css';


function CandidateCard(props) {

    const RemoveCandidate = (id) => {
        //Take all the IDs that DON'T match the seletec Id, add those back into
        const updateCandidates = props.candidates.filter((t) => t.id !== id);
        props.setCandidates(updateCandidates); 
    };

    return (
        <div className="CandidateCard">
            <div>
                <button onClick={() => RemoveCandidate(props.candidate.id)}>X</button>
            </div>
            <div>
                <div className="NameAge">
                    <h3>{props.candidate.name}</h3>
                    <p>{props.candidate.age} år</p> 
                </div>
                <br></br>
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