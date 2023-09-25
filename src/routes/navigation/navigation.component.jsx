// import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link className="logo-container" to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <ul className="nav-links-container">
                <li className="nav-links-item">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;