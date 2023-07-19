import React, { useState } from 'react'

const InputBox = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <div>Enter your name : </div>
        <input type="text" name="input-name" onChange={(e) => (setName(e.target.value))} />
        <div className="output">
            {
                name === ""?"": `Hello ${name}!`
            }
        </div>
    </div>
  )
}

export default InputBox