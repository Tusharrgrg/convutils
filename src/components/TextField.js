import React, { useState } from "react";


export default function TextField(props) {

    // this function convert text to uppercase letters
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    // this function convert text to uppercase letters
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    // this function remove spaces from text 
    const handleSpClick = ()=>{
        let newText = text.replaceAll(" ","");
        setText(newText);
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    

    const[text , setText] = useState("");
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea className ="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-outline-success mx-2" onClick={handleSpClick}>Remove spaces</button>
                <button className="btn btn-outline-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>

            <div className="container my-3">
                <h2 >Your Text Summary</h2>
                <p className=""><span className="fw-bold">{text.split(" ").length}</span> Words and {text.length} Characters</p>
                <p>{ 0.008 * text.split(" ").length} minutes read time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            
        </>
    );
}
