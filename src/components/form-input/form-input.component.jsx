import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <label className="group">
            <input className="form-input" {...otherProps } />
            <div className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`}>{label}</div>
        </label>
    )
}

export default FormInput;