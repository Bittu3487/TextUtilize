import React, { useState } from 'react'

const TeaxtArea = (props) => {
    const [text, setText] = useState("");
    const handleonClick = () => {
        const new_text = text.toUpperCase();
        setText(new_text)
        props.showAlert("success", "converted to Upper Case")
    }
    const handleonloClick = () => {
        const lo_text = text.toLowerCase();
        setText(lo_text)
        props.showAlert("success", "converted to Lower Case")
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleonclearClick = () => {
        setText("")
        props.showAlert("success", "Text is Clear")
    }
    const handleonspaceClick = () => {
        const space_text = text.split(/[ ] + /)
        setText(space_text.join(" "))
        props.showAlert("success", "Extra Text is Remove")
    }
    const handleoncopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("success", "Text is copy")
    }
    const handleCapitalizeFirstLetterClick = () => {
        const capitalized_text = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(capitalized_text);
        props.showAlert("success", "Capitalized First Letter of Each Word");
    };
    return (
        <>
            <div className='container'>
                <h1 className='mb-3'>Enter the Text to Analyze Below</h1>
                <div class="mb-3">
                    <textarea class="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" class="btn btn-primary mx-2 my-2" onClick={handleonClick} >Captalize Text</button>
                <button disabled={text.length === 0} type="button" class="btn btn-primary mx-2 my-2" onClick={handleonloClick} >Lower Text</button>
                <button disabled={text.length === 0} type="button" class="btn btn-primary mx-2 my-2" onClick={handleonclearClick} >Clear Text</button>
                <button disabled={text.length === 0} type="button" class="btn btn-primary mx-2 my-2" onClick={handleonspaceClick} >Remove Space</button>
                <button disabled={text.length === 0} type="button" class="btn btn-primary mx-2 my-2" onClick={handleoncopyClick} >Copy Text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeFirstLetterClick}>
                    TitleCase
                </button>
            </div>
            <div className='container my-3'>
                <h1>Your text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} charecters</p>
                <p>{0.08 * text.split("").filter((element) => { return element.length !== 0 }).length} Minutes read </p>
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}

export default TeaxtArea