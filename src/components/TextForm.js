import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text");
    const handleUpClick = () => {
          setText(text.toUpperCase());
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleColorClick = (e) => {
         document.getElementById("exampleFormControlTextarea1").style.color = e.target.value;
    }
    const handleUnderlineClick = () => {
       let textarea =  document.getElementById("exampleFormControlTextarea1");
        if(textarea.style.textDecoration !== "underline"){
            textarea.style.textDecoration = "underline";

        }
        else {
            textarea.style.textDecoration = "none";

        }
    }
    const handleBoldClick = () =>  {
       let textarea =  document.getElementById("exampleFormControlTextarea1");
       if(textarea.style.fontWeight < 600){
        textarea.style.fontWeight = "600";
       }
       else {
        textarea.style.fontWeight = "400";
       }
       
    }

    const handleItalicClick = () => {
       let textarea =  document.getElementById("exampleFormControlTextarea1");
       if(textarea.style.fontStyle !== "italic"){
        textarea.style.fontStyle = "italic";

       }
       else {
        textarea.style.fontStyle = "normal";

       } 
    }

    // const handleSizeChange = (e) => {
    //    let textarea =  document.getElementById("exampleFormControlTextarea1");
    //     textarea.style.fontSize = e.target.value+"px";
    //     console.log(e.target.value);
    // }

    const handleCopy = () => {
        let textarea =  document.getElementById("exampleFormControlTextarea1");
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
    <>
    <div className="mb-3"  style={{color: props.mode ==="dark" ? "white" :"black"}}>
    <h4 className='text-secondary'>{props.heading} </h4>
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "#0d1222" : "white", color: props.mode === "dark"? "white" : "black"}} value={text} rows="8"></textarea>
    <div className="formatBtns my-3 ">
    <button type="button" className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button type="button" className="btn btn-primary me-2" onClick={handleLowerClick}>Convert to Lowercase</button>
    <button type="button" className="btn btn-primary me-2" onClick={handleClearClick}>Clear</button>
    <button type="button" className="btn btn-primary me-2" onClick={handleUnderlineClick}>Underline</button>
    <button type="button" className='btn btn-primary me-2' onClick={handleBoldClick}>Bold</button>
    <button type="button" className="btn btn-primary me-2" onClick={handleItalicClick}>Italic</button>
    <button type='button' className='btn btn-primary me-2' onClick={handleCopy}>Copy</button>
    <button type='button' className='btn btn-primary me-2' onClick={handleExtraSpaces}>Remove Whitespace</button>
    {/* <input type="range" onInput={handleSizeChange} /> */}
    <input type="color" onInput={handleColorClick} className="me-2 mt-2"/>
    </div>
    </div>
    <div className="container my-2" style={{color: props.mode ==="dark" ? "white" :"black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h5 className='text-secondary' style={{overflowWrap: "break-word"}}>{text.length > 0 ? text : "Enter something in the textbox to preview it here..."}</h5>
    </div>
    </>
  )
}
