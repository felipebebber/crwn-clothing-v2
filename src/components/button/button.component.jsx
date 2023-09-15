import "./button.styles.scss";

const button_types_classes = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({ children, styleType, ...otherProps }) => {
   return (
    <button className={`button-container ${button_types_classes[styleType]}`} {...otherProps}>
        {children}
    </button>
   )
}

export default Button;