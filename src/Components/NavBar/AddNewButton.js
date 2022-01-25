import React, {useState} from "react";
import Form from "./Form";

function AddNew() {

    const [showForm, setShowForm] = useState(false);
    const showInput = (e) => {
        setShowForm(true);
    }


    return (
        <div className="AddNew">
            <button onClick={showInput}>
                Lägg till kandidat
            </button>
            {showForm ? <Form /> : ''}
        </div>
    )
}

export default AddNew