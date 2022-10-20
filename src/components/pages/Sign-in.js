import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStyle from "../../styles/Form";
import FormPage from "../Form-page";
import { ThreeDots } from "react-loader-spinner";
import { signInApi } from "../../services/axios";
import LoginContext from "../../contexts/LoginContext";

export default function SignIn() {
    const {setUserData, setConfig} = useContext(LoginContext);
    const [disabledSignIn, setDisabledSignIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function signInForm(e) {
        e.preventDefault();
        setDisabledSignIn(true);

        const body = {
        email,
        password
        };

        signInApi(body)
            .then((res) => {
            localStorage.setItem("linkr", JSON.stringify(res.data));
            setUserData(localStorage.JSON.parse("linkr"));
            setConfig({ headers: { Authorization: `Bearer ${res.data.token}`}});
            setEmail("");
            setPassword("");
            setDisabledSignIn(false);
            navigate("/timeline");
        })
        .catch((res) => {
            if(res.response.status === 401) {
            alert("Email and/or password are invalid")
            }
            setDisabledSignIn(false);
        })

        
    };

    return (
        <>
            <FormPage>
                <FormStyle onSubmit={signInForm}>
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
                    {disabledSignIn ? (
                        <button disabled={disabledSignIn}><ThreeDots color="white" height="13px" /></button> 
                    ) : (
                        <button disabled={disabledSignIn}>Log In</button>
                    )}
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