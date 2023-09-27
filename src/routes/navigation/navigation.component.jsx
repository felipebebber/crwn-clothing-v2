import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import Logo from '../../assets/images/crown.svg';

import { LogoContainer, NavigationContainer, NavLinksContainer, NavLinks } from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { open } = useContext(CartContext);
    
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <NavigationContainer>
            <LogoContainer to="/">
                <img src={Logo} alt="Logo" />
            </LogoContainer>
            <NavLinksContainer>
                <li className="nav-links-item">
                    <NavLinks to="/shop">
                        SHOP
                    </NavLinks>
                </li>
                <li className="nav-links-item">
                    {
                        currentUser ? (
                            <NavLinks as="span" onClick={signOutHandler}>SIGN OUT</NavLinks>
                        ) : (
                            <NavLinks to="/auth">
                                SIGN IN
                            </NavLinks>
                        )
                    }
                </li>
                <li>
                    <CartIcon />
                    {open && <CartDropdown />}
                </li>
            </NavLinksContainer>
        </NavigationContainer>
    )
}

export default Navigation;