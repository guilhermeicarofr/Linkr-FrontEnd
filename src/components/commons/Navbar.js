import { useContext, useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import { DebounceInput } from "react-debounce-input";

import { getUserByName } from "../../services/axios";
import SearchResult from "./SearchResult";
import { WrapperNavbar } from "../../styles/navbar/WrapperNavbar";
import { WrapperMenuLogOut } from "../../styles/navbar/WrapperMenuLogOut";
import { ButtonLogOut } from "../../styles/searchbar/ButtonLogOut";
import { WrapperSearch } from "../../styles/searchbar/WrapperSearch";
import { ContainerSearch } from "../../styles/searchbar/ContainerSearch";
import { ResultSearch } from "../../styles/searchbar/ResultSearch";
import { Container } from "../../styles/searchbar/Container";

export default function Navbar() {
  const { setUserData, setConfig, userData, config } = useContext(LoginContext);
  const [hidden, setHidden] = useState(true);
  const [search, setSearch] = useState("");
  const [usersSearch, setUsersSearch] = useState([]);
  const [hiddenSearch, setHiddenSearch] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUserByName({ config, search })
      .then((res) => {
        setUsersSearch(res.data);
        setHiddenSearch(false);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setHiddenSearch(true);
        }
      });
  }, [search, config]);

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
      <ContainerSearch
        onClick={() => setHiddenSearch(true)}
        disabled={hiddenSearch}
      />
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


