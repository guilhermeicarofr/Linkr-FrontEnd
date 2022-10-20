import { useState } from "react";
import { publishPost } from "../services/axios";

import PublishBox from "../styles/Publish/PublishBox";
import PublishContent from "../styles/Publish/PublishContent";
import PublishForm from "../styles/Publish/PublishForm";

const inputs = [
  {
    name: "url",
    type: "url",
    placeholder: "http://...",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Awesome article about #javascript",
  },
];

export default function PublishPost() {
  console.log(process.env.REACT_APP_API_URL);

  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    url: "",
    description: "",
  });

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

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
        // TODO:Incluir a função para mostrar todos os posts
        // showPosts();
        setDisabled(false);
      })
      .catch((answer) => {
        alert("Houve um erro ao publicar seu link");
        setDisabled(false);
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
          {inputs.map((input, index) => (
            <input
              key={index}
              name={input.name}
              type={input.type}
              value={form[input.name]}
              placeholder={input.placeholder}
              disabled={disabled}
              required={input.type === "url"}
              onChange={(e) =>
                handleForm({
                  name: e.target.name,
                  value: e.target.value,
                })
              }
            />
          ))}

          <button type="submit" disabled={disabled}>
            {disabled ? "Publishing" : "Publish"}
          </button>
        </PublishForm>
      </PublishContent>
    </PublishBox>
  );
}
