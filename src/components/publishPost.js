import { useState } from "react";
import { publishPost } from "../services/axios";

import PublishBox from "../styles/Publish/PublishBox";
import PublishContent from "../styles/Publish/PublishContent";
import PublishForm from "../styles/Publish/PublishForm";

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
    <PublishBox>
      <div>
        {/*TODO: Linkar a imagem do perfil */}
        Foto
        {/* <img src={login.image} alt="div" /> */}
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
    </PublishBox>
  );
}
