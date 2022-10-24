import React, { useContext, useEffect, useRef, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import { updatePost } from "../../services/axios";

export default function EditableInput({
  description,
  postId,
  isEditing,
  setIsEditing,
  refresh,
  setRefresh,
}) {
  const { config } = useContext(LoginContext);
  const [inputDescription, setInputDescription] = useState(description);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const body = {
        description: inputDescription,
      };

      updatePost({ body, config, postId })
        .then(() => {
          setIsEditing(!isEditing);
        })

        .catch((error) => {
          alert(
            "An error occured while trying to update your post, please try again"
          );
          setIsEditing(true);
        });
      setRefresh(!refresh);
    }

    if (e.key === "Escape") {
      setIsEditing(!isEditing);
    }
  }

  return (
    <input
      ref={inputRef}
      value={inputDescription}
      onChange={(e) => setInputDescription(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
}
