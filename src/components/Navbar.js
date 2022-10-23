import { useContext, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginContext from "../contexts/LoginContext";

export default function Navbar() {
  const { setUserData, setConfig, userData } = useContext(LoginContext);
  const [hidden, setHidden] = useState(true);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear("linkr");
    setUserData(null);
    setConfig(null);
    navigate("/");
  }

  return (
    <>
      <WrapperNavbar>
        <h1 onClick={() => navigate("/timeline")}>linkr</h1>
        <WrapperMenuLogOut onClick={() => setHidden(!hidden)}>
          {hidden ? (
            <AiOutlineDown
              style={{
                color: "#ffffff",
                cursor: "pointer",
              }}
              size={30}
            />
          ) : (
            <AiOutlineUp
              style={{
                color: "#ffffff",
                cursor: "pointer",
              }}
              size={30}
            />
          )}
          <img
            src={userData.picture}
            alt="img"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU";
            }}
          ></img>
        </WrapperMenuLogOut>
      </WrapperNavbar>
      <ButtonLogOut onClick={() => logOut()} disabled={hidden}>
        Logout
      </ButtonLogOut>
      <Container>
        <WrapperSearch>
          <input
            placeholder="Search for people"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <BsSearch
            style={{
              color: "#C6C6C6",
              cursor: "pointer",
              backgroundColor: "#ffffff",
            }}
            size={20}
          />
        </WrapperSearch>
      </Container>
    </>
  );
}

const WrapperNavbar = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #151515;
  padding: 0px 20px 0px 20px;

  h1 {
    height: 54px;
    width: 108px;
    color: #ffffff;
    font-family: "Passion One", cursive;
    font-size: 49px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.05em;
  }

  input {
    height: 100%;
    max-width: 543px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: red;
  }
  input::placeholder {
    font-family: "Lato", sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    color: #c6c6c6;
  }
  img {
    height: 53px;
    width: 53px;
    border-radius: 26.5px;
    cursor: pointer;
  }
`;

const WrapperSearch = styled.span`
  position: fixed;
  top: 13px;
  left: 30%;
  height: 46px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0px 17px;

  @media (max-width: 937px) {
    position: initial;
    width: 95%;
    margin-top: 72px;
  }
`;

const WrapperMenuLogOut = styled.div`
  height: 72px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonLogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 47px;
  width: 150px;
  right: 0px;
  top: 72px;
  border-radius: 0px 0px 0px 15px;
  background-color: #171717;
  color: #ffffff;
  cursor: pointer;
  display: ${(props) => (props.disabled ? "none" : "normal")};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
