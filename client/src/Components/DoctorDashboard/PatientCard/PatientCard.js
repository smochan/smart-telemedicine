import React from 'react';
import { confirmInvitationApi } from '../../../api';

const PatientCard = (props) => {

    
    const handleSubmit = async () => {
     await confirmInvitationApi(props.id);
        window.location.reload();
    }

    return(
        <>
            <div className="Card">
                Hi I am {props.name}, email id is {props.email}. 
                I am sufferring from {props.disease}. Kindly accept my appointment request.
                <button onClick={handleSubmit}>
                    Accept
                </button>
            </div>
        </>
    )
}

export default PatientCard;
