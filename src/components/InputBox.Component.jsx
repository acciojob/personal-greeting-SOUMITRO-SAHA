import React, { useState } from 'react'

const InputBox = () => {
    const [name, setName] = useState("");
  return (
    <>
        <p>Enter your name : </p>
        <input type="text" onChange={(e) => (setName(e.target.value))} />
        <p>
            {
                name === ""?"": `Hello ${name}!`
            }
        </p>
    </>
  )
}

export default InputBox