import React, { useState } from 'react'

const InputCheck = (props) => {
    const [type, setType] = useState("text")
    return (
        <input type={type} placeholder={props.placeHolder} name={props.Name} id={props.Id} onClick={() => setType("date")} onMouseLeave={() => setType("text")} className="check_input" />
    )
}

export default InputCheck