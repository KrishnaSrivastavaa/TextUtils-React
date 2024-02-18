import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");


    }
    const handleLoClick = () => {
        // console.log("Uppercase is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");


    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("All Clear", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            
            <div className="mb-3">
                
                <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey' , color: props.mode === 'dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} word and {text.length} character</p>
            <p>{.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
        </div>



        </>
    )
}


