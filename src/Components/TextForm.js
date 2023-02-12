import React, {useState} from 'react'

function TextForm(props) {

    const handleUpClick=()=> {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick=()=> {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const clearText=()=> {
        let newText="";
        setText(newText);
    }

    const copyText=()=> {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const remExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

// useState   TO CREATE BELOW
    const [text,setText]=useState('');
    return (
    <> 
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'rgb(33,37,41)':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange}  rows="8"></textarea>
        <button className="btn btn-primary my-3 mx=3" onClick={handleUpClick} >
            Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >
            Lowercase
        </button>
        <button className="btn btn-primary my-3 mx=3" onClick={copyText} >
            Copy-Text
        </button>
        <button className="btn btn-primary my-3 mx=3" onClick={clearText} >
            Clear
        </button>
        <button className="btn btn-primary my-3 mx=3" onClick={remExtraSpace} >
            Rem Extra Spaces
        </button>

        </div>
    </div>
    <div style={{color:props.mode==='dark'?'white':'black'}} className="container">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length } words and {text.length} characters </p>
        <p> {0.008 * text.split(" ").length } minutes required to read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Your Text In The Textbox To Preview Here"}</p>
    </div>
    </>
  )
}


export default TextForm