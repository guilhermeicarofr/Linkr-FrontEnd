import styled from "styled-components";
import { TbHeart } from "react-icons/tb";

export default function IconLike() {
  return (
    <LikesStyle>
      <TbHeart></TbHeart>
      <span>13 likes</span>
    </LikesStyle>
  );
}

const LikesStyle = styled.div`
  font-size: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 11px;
    font-family: "Lato", sans-serif;
    margin-top: 4px;
  }
`;
