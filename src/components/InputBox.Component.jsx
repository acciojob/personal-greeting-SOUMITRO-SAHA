import React, { useState } from 'react'

const InputBox = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <p>Enter your name : </p>
        <input type="text" onChange={(e) => (setName(e.target.value))} />
        <p>
            {
                name === ""?"": `Hello ${name}!`
            }
        </p>
    </div>
  )
}

export default InputBox