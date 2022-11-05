import React, { useEffect, useState } from 'react'

export const LoginForm = () => {
    const [usuario, setUsuario]=useState(undefined)
    const [password, setPassword]=useState(undefined)
    //UseEffect solo se carga la primera vez que se carge un componente cuando no se le pasa un argumento
    //UseEffect cuando se le pasa un argumento dice que corra cada vez que cambie lo que se pase como argumento

    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onLoginFormSubmitted = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form onSubmit={onLoginFormSubmitted}>
                <label>Usuario</label>
                <input type="text" onChange={handleUsuarioChange}/>
                <input type="password" onChange={handlePasswordChange}/>
                <p>{usuario}</p>
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}