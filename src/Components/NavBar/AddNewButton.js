import React, {useState} from "react";
import Form from "./Form";

function AddNew({candidates, setCandidates}) {

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
            {showForm ? <Form toggle={toggle} candidates={candidates} setCandidates={setCandidates} showForm={showForm} setShowForm={setShowForm}/> : ''}
        </div>
    )
}

export default AddNew