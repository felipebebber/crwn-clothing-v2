import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartOpenContext } from "../../context/cart-open";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { Link } from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { open } = useContext(CartOpenContext);
    
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
                </li>
                <li className="nav-links-item">
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
                <li>
                    <CartIcon />
                    {open && <CartDropdown />}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;