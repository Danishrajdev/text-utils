import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{position: "absolute",right: "10px",top: "70px"}}>
     {props.alert.msg}
     </div>
  )
}

export default Alert