import React, {useState} from "react";
import Form from "./Form";

function AddNew({candidateInfo, setCandidateInfo}) {

    const [showForm, setShowForm] = useState(false);

    const showInput = () => {
        setShowForm(true);
    }

    function toggle() {
        setShowForm(showForm => !showForm);
      }

    return (
        <div className="AddNew">
            <button onClick={showInput}>
                Lägg till kandidat
            </button>
            {showForm ? <Form toggle={toggle} candidateInfo={candidateInfo} setCandidateInfo={setCandidateInfo}/> : ''}
        </div>
    )
}

export default AddNew