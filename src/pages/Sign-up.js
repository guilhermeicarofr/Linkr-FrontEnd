import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";
import FormPage from "../components/initialPages/Form-page";
import { signUp } from "../services/axios";
import { Button } from "../styles/commons/Button";
import FormStyle from "../styles/commons/Form";
import { Input } from "../styles/commons/Input";

function Inputs({ handleForm, form, disabled }) {
  return (
    <>
      <Input
        placeholder="e-mail"
        name="email"
        value={form.email}
        onChange={handleForm}
        readOnly={disabled}
        type="email"
        maxLength="100"
        required
      />
      <Input
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleForm}
        readOnly={disabled}
        type="password"
        maxLength="50"
        required
      />
      <Input
        placeholder="username"
        name="name"
        value={form.name}
        onChange={handleForm}
        readOnly={disabled}
        type="text"
        maxLength="50"
        required
      />
      <Input
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
      .catch((error) => {
        setDisabled(false);
        if (error.response.status === 409) {
          alert("E-mail already in use");
        }
        if (error.response.status === 422) {
          alert("Invalid Format");
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
          <Button disabled={disabled} type="submit">
            <ThreeDots color="white" height="13px" />
          </Button>
        ) : (
          <Button disabled={disabled}>Sign Up</Button>
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
