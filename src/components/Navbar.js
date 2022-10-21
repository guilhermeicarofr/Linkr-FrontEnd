import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs"
import styled from "styled-components";

export default function Navbar() {
    const [search, setSearch] = useState();

    return (
        <>
            <WrapperNavbar>
                <h1>linkr</h1>
                <WrapperSearch>
                    <input
                        placeholder="Search for people"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                    />
                    <BsSearch 
                        style={{
                            color:  "#C6C6C6",
                            cursor: 'pointer',
                            backgroundColor: '#ffffff'
                        }}
                        size={20}
                    />
                </WrapperSearch>
                <WrapperMenuLogOut>
                    <AiOutlineDown 
                        style={{
                            color:  "#ffffff",
                            cursor: 'pointer',
                            
                        }}
                        size={30}
                    />
                    <img src="https://i.pinimg.com/736x/c5/a9/68/c5a968eb0a92b427ca26646cf55526bb.jpg" alt="img"></img>
                </WrapperMenuLogOut>
            </WrapperNavbar>
        </>
    )
};

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

    & h1 {
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
        height: 45px;
        width: 543px;
        border: none;
        outline: none;
        border-radius: 8px;
    }

    input::placeholder {
        font-family: "Lato", sans-serif;
        font-family: Lato;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        color: #C6C6C6;
    }

    img {
        height: 53px;
        width: 53px;
        border-radius: 26.5px;
    }
`;

const WrapperSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 0px 17px;
`;

const WrapperMenuLogOut = styled.div`
    height: 72px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;