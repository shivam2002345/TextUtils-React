import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convertes to Uppercase!","success");
}

const handleLoClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
        props.showAlert("convertes to LowerCase!","success");

}

 const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        
    }

 const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard!","success");

 }   

 const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space removed!","success");

 }

const [text, setText] = useState('Enter text here');

  return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} rows="8">             
        </textarea>
    </div>
    <button className='btn btn-success mx-1' onClick={handleUpClick}>conver to uppercase</button>
    <button className='btn btn-success mx-1' onClick={handleLoClick}>conver to lowercase</button>
    <button className='btn btn-success mx-1' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-success mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>


</div>
<div className='container my-3'style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Text Summary :</h1>
<p>
    {text.split(" ").length} words and {text.length} characters
</p>
<p> {0.008 * text.split(" ").length} minutes to read. </p>

<h2>Preview</h2>
<p>{text.length>0?text:'Enter the text in above text area to preview it here'}</p>
</div>
</>
  )
}



