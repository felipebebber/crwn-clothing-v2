import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import Button, { button_style } from "../button/button.component";

import { SignUpContainer, ButtonsContainer } from "./sign-in.styles";

import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {
        email,
        password,
    } = formFields;

    const signInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

        } catch (error) {
            if (
                error.code === "auth/invalid-login-credentials" ||
                error.code === "auth/wrong-password" 
            ) {
                alert('Wrong email or password.')
                return;
            } else {
                console.log(error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h2>I already have an account.</h2>
            <p>Sign in with your email and password</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Email"
                        required
                        onChange={handleChange}
                        name="email" 
                        type="email" 
                        value={email}
                    />
                    <FormInput 
                        label="Password"
                        required
                        onChange={handleChange}
                        name="password" 
                        type="password" 
                        value={password}
                    />
                    <ButtonsContainer>
                        <Button type="submit">Sign In</Button>
                        <Button type="button" styleType={button_style.google} onClick={signInWithGoogle}>
                            Sign WIth Google
                        </Button>
                    </ButtonsContainer>
                </form>
            </div>
        </SignUpContainer>
    )
}

export default SignInForm;