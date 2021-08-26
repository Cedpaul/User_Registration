import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
             <nav className="navbar bg-light navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/list" className="nav-link">List</Link>
                    </li>
                </ul>
                </nav>
        </div>
    )
}

export default NavBar
