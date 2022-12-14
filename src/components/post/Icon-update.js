import { RiBallPenLine } from "react-icons/ri";
import styled from "styled-components";

export default function IconUpdate({ isEditing, setIsEditing }) {
  return <UpdateStyle onClick={() => setIsEditing(!isEditing)} />;
}

const UpdateStyle = styled(RiBallPenLine)`
  color: white;
  font-size: 19px;
  cursor: pointer;
`;
