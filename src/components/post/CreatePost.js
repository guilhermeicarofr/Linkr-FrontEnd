import { useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";

import { publishPost } from "../../services/axios";

import PublishBox from "../../styles/publishbox/PublishBox";
import PublishContent from "../../styles/publishbox/PublishContent";
import PublishForm from "../../styles/publishbox/PublishForm";

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

export default function CreatePost() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    url: "",
    description: "",
  });
  const { userData, config,refresh, setRefresh } = useContext(LoginContext);

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
      alert("Please enter a valid URL");
      setDisabled(false);
      return;
    }
    publishPost(form, config)
      .then(() => {
        setDisabled(false);
        setForm({
          url: "",
          description: "",
        });
        setRefresh(!refresh);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please login to continue");
        } else {
          alert("Unable to publish your post");
        }

        setDisabled(false);
      });
  }

  return (
    <PublishBox>
      <div>
        <img
          src={userData.picture}
          alt="pic"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU";
          }}
        />
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
