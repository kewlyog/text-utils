import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlertMessage('Converted to Uppercase', 'success');
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.setAlertMessage('Converted to Lowercase', 'success');
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.setAlertMessage('Copied all text', 'success');
    }

    const handleResetClick = () => {
        setText('');
        props.setAlertMessage('Text cleared', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#212525' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}>
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleResetClick}>Reset</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text === '' ? 0 : text.replace(/\s/g, '').length} words, {text.length} characters</p>
                <p>{(0.008 * text.split(" ").length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
