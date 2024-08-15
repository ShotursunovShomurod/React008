import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Login = () => {
    const navigate = useNavigate()

    const handleForm = (e) =>{
        e.preventDefault()
        navigate("/admin")
    }


    return (
        <>
            <form className='container mx-auto' onSubmit={handleForm}>
                <input required placeholder='Email' className='border' type="Email" />
                <input required placeholder='Password' className='border' type="password" />
                <button type='submit'>Admin Panel</button>
            </form>

        </>
    )
}

export default Login