import { useContext, useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginContext from "../../contexts/LoginContext";
import { DebounceInput } from "react-debounce-input";

import { getUserByName } from "../../services/axios";
import SearchResult from "./SearchResult";

export default function Navbar() {
  const { setUserData, setConfig, userData, config } = useContext(LoginContext);
  const [hidden, setHidden] = useState(true);
  const [search, setSearch] = useState();
  const [usersSearch, setUsersSearch] = useState([]);
  const [hiddenSearch, setHiddenSearch] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    getUserByName({config, search})
      .then((res) => {
        console.log(res.data);
        setUsersSearch(res.data);
      })
      .catch((res) => {
        console.log(res);
      })
  }, [search, config])

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
                "https://www.pinpng.com/pngs/m/53-531868_person-icon-png-transparent-png.png";
            }}
          ></img>
        </WrapperMenuLogOut>
      </WrapperNavbar>
      <ButtonLogOut onClick={() => logOut()} disabled={hidden}>
        Logout
      </ButtonLogOut>
      <Container>
        <WrapperSearch onClick={() => setHiddenSearch(false)}>
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
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
      <ContainerSearch onClick={() => setHiddenSearch(true)} disabled={hiddenSearch}/>
      <ResultSearch disabled={hiddenSearch}>
          {usersSearch.map((value, index) => (               
            <SearchResult
              key={index}
              setHiddenSearch={setHiddenSearch}
              picture={value.picture}
              name={value.name}
              userId={value.id}
            />                  
          ))}
      </ResultSearch>
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
  z-index: 1;

  @media (max-width: 937px) {
    z-index: 10;
  }

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
  z-index: 4;

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

const ContainerSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0px;
  display: ${(props) => (props.disabled ? "none" : "normal")};
`

const ResultSearch = styled.div`
  position: fixed;
  left: 30%;
  top: 0px;
  width: 40%;
  overflow-y: scroll;
  max-height: 200px;
  padding-top: 25px;
  margin-top: 45px;
  background-color: #E7E7E7;
  z-index: 3;
  border-radius: 8px;
  display: ${(props) => (props.disabled ? "none" : "normal")};

  @media (max-width: 937px) {
    position: absolute;
    width: 95%;
    top: 82px;
    left: 2.5%;
  }
`
