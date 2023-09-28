import { Group, InputLabel, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps } />
            <InputLabel shrink={otherProps.value.length > 0 ? true : false}>{label}</InputLabel>
        </Group>
    )
}

export default FormInput;