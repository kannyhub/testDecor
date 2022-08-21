import React, { useState } from 'react'

export default function Textarea(props) {
    const handleText = (event) => {
        setText(event.target.value)
    }

    const handleUCtext = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been converted into Uppercase.", 'success')
    }

    const handleLCtext = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been converted into Lowercase.", 'success')
    }

    const handleCopytext = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied into clipboard.", 'success')
    }

    const handleCleartext = () => {
        setText('')
        props.showAlert("Input box has been cleared.", 'success')
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className='container my-3'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text below</label>
                <textarea className="form-control" onChange={handleText} value={text} style={{backgroundColor : props.mode === 'dark' ? '#001442' : '#fff',color : props.mode === 'dark' ? '#fff' : '#000'}} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleUCtext}>Upparcase</button>
            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleLCtext}>Lowercase</button>
            <button type="button" className="btn btn-info btn-sm mx-1" onClick={handleCopytext}>Copy</button>
            <button type="button" className="btn btn-danger btn-sm mx-1" onClick={handleCleartext}>Clear</button>
        </div>
        <div className='container'>
            <h5>{text.split(' ').length - 1} words and {text.length} characters</h5>
        </div>
    </>
  )
}
