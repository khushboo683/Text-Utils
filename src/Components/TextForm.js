import React, {useState} from 'react'

export default function TextForm(props) {
    const clickUpHandler=()=>{
        // console.log('clicked');
        var newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to uppercase","success");
    }
    const clickLowHandler=()=>{
        //console.log('clicked');
        var newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to lowercase","success");
    }
    const handleOnchange=(event)=>{
        console.log('on change');
        setText(event.target.value);
    }
    const handleSpaces=()=>{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces removed","success");
    }
    const handleCopy=()=>{
        var newText=document.getElementById('floatingTextarea');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied","success");
    }
    const [text,setText]=useState("");
    return (
        <div>
        <div className=" container my-6 form-floating">
        <h3 style={{marginTop:'50px'}}>Enter text</h3>
       
        <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'dark':'light'}`} placeholder="Leave a comment here" onChange={handleOnchange} id="floatingTextarea"  row="10" value={text}></textarea>
        
        <button className="btn btn-primary my-3 mx-2" onClick={clickUpHandler}>To Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clickLowHandler}>To Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleSpaces}>Remove extra spaces</button>
       
        
      </div>
      <div className="container my-5">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} letters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h4>Preview</h4>
      <p>{text.length===0?'Enter something in text box to preview it':text}</p>
      </div>
        </div>
    )
}
