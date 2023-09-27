// import "./form-input.styles.jsx";

import { Group, InputLabel, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps } />
            <InputLabel className={`${otherProps.value.length > 0 ? 'shrink' : ''}`}>{label}</InputLabel>
        </Group>
    )
}

export default FormInput;