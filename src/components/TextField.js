import React, { useState } from "react";


export default function TextField(props) {

    // this function convert text to uppercase letters
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    // this function convert text to uppercase letters
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    // this function remove spaces from text 
    const handleSpClick = () => {
        let newText = text.replaceAll(" ", "");
        setText(newText);
        props.showAlert("Removed spaces!", "success");
    }

    // this function clear text 
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear text!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    let styles = {
        color: props.mode === 'light' ? '#042743' : 'white'
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3" style={styles}>
                <h1 style={styles}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(36 74 104)', color: props.mode === 'light' ? 'black' : 'white'
                    }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button  disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button  disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpClick}>Remove spaces</button>
                <button  disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button  disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            </div>

            <div className="container my-3" style={styles}>
                <h2 >Your Text Summary</h2>
                <p className=""><span className="fw-bold">{text.split(/\s+/).filter((str) => str !== '').length}</span> Words and {text.length} Characters</p>
                <p >{0.008 * text.split(/\s+/).filter((str) => str !== '').length} minutes read time</p>
                <h3>Preview</h3>
                <p >{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    );
}
