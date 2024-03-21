import React from 'react';

export default function Alert(props) {

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div style={{ height: '50px' }}>
            {props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`}
                role="alert">
                <strong>{capitalizeFirstLetter(props.alertMessage.type)}</strong>: {props.alertMessage.msg}
            </div>}
        </div>
    )
}
