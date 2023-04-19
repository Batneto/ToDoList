import { Link } from 'react-router-dom'

export const NavBar = () => {
    
    return (
        <nav>
            <ul className='nav'>
                <li className="nav-link active"><Link to='/'>Home</Link></li>
                <li className="nav-link "><Link to='/servicios'>Servicios</Link></li>
                <li className="nav-link " > <Link to='/login'>Login</Link></li >
            </ul >
        </nav >
    )
}