import { useContext } from "react";
import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Link } from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

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
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;