import { useState } from "react";

import styled from "styled-components";
import { publishPost } from "../services/axios";

import venom from "../assets/PROVISORIA-venom.png";

function Inputs({ handleForm, form, disabled }) {
  return (
    <>
      <input
        placeholder="http://..."
        name="url"
        value={form.url}
        onChange={handleForm}
        disabled={disabled}
        type="url"
        required
      />
      <input
        placeholder="Awesome article about #javascript"
        name="description"
        value={form.description}
        onChange={handleForm}
        disabled={disabled}
        type="text"
      />
    </>
  );
}

export default function PublishPost() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    url: "",
    description: "",
  });

  function submitData(e) {
    e.preventDefault();
    setDisabled(true);
    if (form.url === "") {
      alert("Insira o link que deseja compartilhar");
      setDisabled(false);
      return;
    }
    publishPost(form)
      .then(() => {
        setDisabled(false);
      })
      .catch((answer) => {
        setDisabled(false);
        alert("Houve um erro ao publicar seu link");
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Wrapper>
      <div>
        <img src={venom} alt="div" />
      </div>
      <PublishContent>
        <h1>What are you going to share today?</h1>
        <PublishForm onSubmit={submitData}>
          <Inputs handleForm={handleForm} disabled={disabled} form={form} />
          <button type="submit" disabled={disabled}>
            {disabled ? "Publishing" : "Publish"}
          </button>
        </PublishForm>
      </PublishContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 611px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 0 22px 16px 18px;
  gap: 18px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 300;

  margin: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 16px;
  }

  @media (max-width: 870px) {
    width: 100%;
    margin: 0;
    border-radius: 0;
    img {
      display: none;
    }
  }
`;

const PublishContent = styled.div`
  width: 100%;

  h1 {
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin: 21px 0 20px;

    @media (max-width: 870px) {
      font-size: 17px;
      text-align: center;
      margin: 10px 0;
    }
  }
`;

const PublishForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #efefef;
    color: #949494;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    padding-left: 13px;

    :nth-child(2) {
      height: 66px;
      padding-bottom: 35px;
    }
    &::placeholder {
      color: #9f9f9f;
    }
  }
  button {
    height: 31px;
    width: 112px;
    background-color: #1877f2;
    border-radius: 6px;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 870px) {
    input {
      :nth-child(2) {
        height: 47px;
        padding-bottom: 15px;
      }
    }

    button {
      font-size: 13px;
      height: 22px;
    }
  }
`;
