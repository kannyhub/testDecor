import React from 'react'

export default function Contact(props) {
    return (
        <div className='container'>
            <h3 className="mb-3">Enter your details to contact :)</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" style={{backgroundColor : props.mode === 'dark' ? '#001442' : '#fff',color : props.mode === 'dark' ? '#fff' : '#000'}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" style={{backgroundColor : props.mode === 'dark' ? '#001442' : '#fff',color : props.mode === 'dark' ? '#fff' : '#000'}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                    <textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? '#001442' : '#fff',color : props.mode === 'dark' ? '#fff' : '#000'}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
