import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from '../../components/sign-up/sign-up.component';
// import "./sign-in.styles.scss";

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect 
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>
                Sign in Page
            </h1>
            <button onClick={logGoogleUser}>
                Entra com o gugug
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;