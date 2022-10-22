import styled from "styled-components";
import { IoTrash } from "react-icons/io5";

export default function IconDelete() {
  return <IconDeleteStyle />;
}
const IconDeleteStyle = styled(IoTrash)`
  color: white;
  font-size: 19px;
  margin-left: 9px;
`;
