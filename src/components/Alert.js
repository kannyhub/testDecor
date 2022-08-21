import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"70px"}}>
      {props.alert && <div className='container'>
          <div className={`alert alert-${props.alert.type}`} role="alert">
              {props.alert.message}
          </div>
      </div>}
    </div>
  )
}
