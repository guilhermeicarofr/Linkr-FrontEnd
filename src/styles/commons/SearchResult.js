import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SearchResult({image, name, userId}) {
    return (
        <Link to={`/user/${userId}`}>
            <Container>
                <img src={image} alt="img"></img>
                <h4>{name}</h4>
            </Container>
        </Link>
    )
} 

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 39px;
    margin-bottom: 16px;
    padding-left: 17px;
    cursor: pointer;
    
    img {
        height: 39px;
        width: 39px;
        border-radius: 304px;
        margin-right: 12px;
    }
    
    h4 {
        color: #515151;
        font-family: Lato;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
    }
`