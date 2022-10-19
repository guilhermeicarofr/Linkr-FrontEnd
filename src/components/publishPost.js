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
        readOnly={disabled}
      />
      <input
        placeholder="Awesome article about #javascript"
        name="description"
        value={form.description}
        onChange={handleForm}
        readOnly={disabled}
        type="text"
        maxLength="300"
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
    if (form.url === "" || form.description === "") {
      alert("A URL é obrigatória");
      setDisabled(false);
      return;
    }
    publishPost(form)
      .then(() => {
        setDisabled(false);
      })
      .catch((answer) => {
        setDisabled(false);
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
      <ProfilePicture>
        <img src={venom} alt="profilePicture" />
      </ProfilePicture>
      <Content>
        <h1>What are you going to share today?</h1>
        <PublishForm onSubmit={submitData}>
          <Inputs handleForm={handleForm} disabled={disabled} form={form} />
          <button type="submit" disabled={disabled}>
            Publish
          </button>
        </PublishForm>
      </Content>
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

  margin: 50px;
`;

const Content = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin: 21px 0 20px;
  }
`;

const PublishForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 18px;
  input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #efefef;
    color: #949494;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    padding-left: 13px;

    :nth-child(2) {
      height: 66px;
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
    font-family: "Lato";
    font-style: normal;
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
      }
    }

    button {
      font-size: 13px;
      height: 22px;
    }
  }
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 16px;
`;
