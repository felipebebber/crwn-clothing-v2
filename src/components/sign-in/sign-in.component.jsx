import { useState } from "react";
import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";
import "./sign-in.styles.scss";

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
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
        // await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
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
        <div className="sign-in-container sign-up-container">
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
                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                        <Button type="button" styleType="google" onClick={signInWithGoogle}>
                            Google
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;