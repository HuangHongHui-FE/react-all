import React, { useState } from "react"

function useUpdateInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    return {
        value,
        onChange: event => setValue(event.target.value)
    }
}

export default function Home(props) {
    const usernameInput = useUpdateInput('')
    const passwordInput = useUpdateInput('')
    const submitForm = event => {
        event.preventDefault()
        console.log(usernameInput.value)
        console.log(passwordInput.value)
    }
    return <form onSubmit={submitForm}>
        <input type="text" name="username" {...usernameInput}></input>
        <input type="password" name="password" {...passwordInput}></input>
        <input type="submit"></input>
    </form>
}
