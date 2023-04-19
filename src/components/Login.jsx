import React from 'react'

export const Login = () => {
  return (
    <div>
        

        <form action='/' className='sec-form'>

            <input className='i-form' type="text" placeholder='Nombre de usuario' />
            <input className='i-form' type="password" placeholder='Contraseña'  />
            <input className='s-form' type="submit" name="" id="" value="Login"  /> 

        </form>
    </div>
  )
}
