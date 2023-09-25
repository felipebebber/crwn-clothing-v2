import { useState } from "react";
import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";
import "./sign-up.styles.scss";

import { 
    auth,
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth
 } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        displayName,
        email,
        password,
        confirmPassword,
    } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) return;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            const userCreation = await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();

        } catch(error) {
            if (error.code === 'auth/email-already-in-use' ) {
                alert('Cannot create user. E-mail already in use.');   
            }
            console.log("user creating encountered and error", error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <p>Sign up with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name" 
                    type="text" required 
                    name="displayName"
                    onChange={handleChange}
                    value={displayName} 
                />
                <FormInput 
                    label="Email" 
                    type="email" required 
                    name="email"
                    onChange={handleChange}
                    value={email} 
                />
                <FormInput 
                    label="Password" 
                    type="password" required 
                    name="password"
                    onChange={handleChange}
                    value={password} 
                />
                <FormInput 
                    label="Confirm Password" 
                    type="password" required 
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword} 
                />
                <Button type="submit" styleType="inverted">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;