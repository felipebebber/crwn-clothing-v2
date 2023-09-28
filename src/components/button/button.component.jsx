import { BaseButton, GoogleSignInButon, InvertedButon } from "./button.styles";

export const button_style = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (styleType = button_style.base) => {
    return {
        [button_style.base]: BaseButton,
        [button_style.google]: GoogleSignInButon,
        [button_style.inverted]: InvertedButon,
    }[styleType]
}

const Button = ({ children, styleType, ...otherProps }) => {
    const CustomButton = getButton(styleType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
   )
}

export default Button;