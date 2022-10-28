import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginContext from "../../contexts/LoginContext";

export default function SearchResult({
  picture,
  name,
  userId,
  setHiddenSearch,
  followedBy
}) { 
  const {userData} = useContext(LoginContext);

  return (
    <Link to={`/user/${userId}`}>
      <Container onClick={() => setHiddenSearch(true)}>
        <img
          src={picture}
          alt="img"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU";
          }}
        />
        <h4>{name}</h4>
        {followedBy === userData.userId? <h3>• following</h3>: ""}
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 39px;

  margin: 13px 0px 16px 0px;
  padding-left: 17px;
  cursor: pointer;

  img {
    height: 39px;
    width: 39px;
    border-radius: 304px;
    margin-right: 12px;
  }

  h3{
    color: #C5C5C5;
    font-size: 19px;
    margin-left: 7px;
  }

  h4 {
    color: #515151;   
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
  }
`;
