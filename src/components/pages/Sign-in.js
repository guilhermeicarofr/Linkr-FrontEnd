import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStyle from "../../styles/Form";
import FormPage from "../Form-page";

export default function SignIn() {
    const [disabledSignIn, setDisabledSignIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return (
        <>
            <FormPage>
                <FormStyle>
                    <input
                        placeholder="e-mail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={disabledSignIn}
                        type="email"
                        maxLength="100"
                        required
                    />
                    <input
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={disabledSignIn}
                        type="password"
                        maxLength="50"
                        required
                    />
                    <button>Log In</button>
                </FormStyle>
                <span
                        onClick={() => {
                        navigate("/sign-up");
                        }}
                    >
                        First Time? Create an account!
                    </span>
            </FormPage>
        </>
    )
}