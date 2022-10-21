import { useState } from "react";

import { useNavigate } from "react-router-dom";

import FormPage from "../Form-page";
import FormStyle from "../../styles/Form";
import { signUp } from "../../services/axios";
import { ThreeDots } from "react-loader-spinner";

function Inputs({ handleForm, form, disabled }) {
  return (
    <>
      <input
        placeholder="e-mail"
        name="email"
        value={form.email}
        onChange={handleForm}
        readOnly={disabled}
        type="email"
        maxLength="100"
        required
      />
      <input
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleForm}
        readOnly={disabled}
        type="password"
        maxLength="50"
        required
      />
      <input
        placeholder="username"
        name="name"
        value={form.name}
        onChange={handleForm}
        readOnly={disabled}
        type="text"
        maxLength="50"
        required
      />
      <input
        placeholder="picture url"
        name="picture"
        value={form.picture}
        onChange={handleForm}
        type="url"
        readOnly={disabled}
        required
      />
    </>
  );
}

export default function SignUp() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    picture: "",
  });
  const navigate = useNavigate();
  function submitData(e) {
    e.preventDefault();
    setDisabled(true);
    signUp(form)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((answer) => {
        setDisabled(false);
        if (answer.response.status === 409) {
          alert("Email já em uso");
        }
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <FormPage>
      <FormStyle onSubmit={submitData}>
        <Inputs handleForm={handleForm} disabled={disabled} form={form} />
        {disabled ? (
          <button disabled={disabled} type="submit">
            <ThreeDots color="white" height="13px" />
          </button>
        ) : (
          <button disabled={disabled}>Log In</button>
        )}
      </FormStyle>
      <span
        onClick={() => {
          navigate("/");
        }}
      >
        Switch back to log in
      </span>
    </FormPage>
  );
}
