import React, { useState } from 'react'

export default function Textarea() {
    const handleText = (event) => {
        setText(event.target.value)
    }

    const handleUCtext = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLCtext = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className='container my-3'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text below</label>
                <textarea className="form-control" onChange={handleText} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleUCtext}>Upparcase</button>
            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleLCtext}>Lowercase</button>
        </div>
        <div className='container'>
            <h5>{text.split(' ').length - 1} words and {text.length} characters</h5>
        </div>
    </>
  )
}
