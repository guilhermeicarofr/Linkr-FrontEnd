import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../components/initialPages/Form-page";
import { signInApi } from "../services/axios";
import FormStyle from "../styles/commons/Form";
import { ThreeDots } from "react-loader-spinner";
import LoginContext from "../contexts/LoginContext";
import { setUser } from "../utils/localstorage";

export default function SignIn() {
  const { setUserData, userData, setConfig } = useContext(LoginContext);
  const [disabledSignIn, setDisabledSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/timeline");
    }
  }, [userData, navigate]);

  function signInForm(e) {
    e.preventDefault();
    setDisabledSignIn(true);

    const body = {
      email,
      password,
    };

    signInApi(body)
      .then((res) => {
        setUser(res.data);
        setUserData(res.data);
        setConfig({ headers: { Authorization: `Bearer ${res.data.token}` } });
        setEmail("");
        setPassword("");
        setDisabledSignIn(false);
        navigate("/timeline");
      })
      .catch((error) => {
        setDisabledSignIn(false);
        if (error.response.status === 401) {
          alert("Email and/or password are invalid");
        }
      });
  }

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
            <button disabled={disabledSignIn}>
              <ThreeDots color="white" height="13px" />
            </button>
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
  );
}
