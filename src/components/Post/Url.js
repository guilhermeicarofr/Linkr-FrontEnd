import styled from "styled-components";

export default function Url({ url }) {
  return (
    <UrlStyle href={url.path} target="_blank">
      <div>
        <h3>{url.title}</h3>
        <p>{url.description}</p>
        <p>{url.path}</p>
      </div>
      <div>
        <img src={url.image} alt="url" />
      </div>
    </UrlStyle>
  );
}
const UrlStyle = styled.a`
  max-width: 503px;
  width: 100%;
  display: flex;
  border-radius: 16px;
  border: 1px solid #4c4c4c;
  height: 155px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  h3 {
    font-size: 16px;
    color: #cecece;
  }
  div:first-child {
    padding: 24px 0 23px 19px;
    word-break: break-all;
    p:nth-child(2) {
      font-size: 11px;
      color: #9b9595;
      margin: 10px 0;
    }
    p:last-child {
      font-size: 11px;
      color: #cecece;
    }
  }
  div:last-child {
    width: 150px;
    img {
      width: 150px;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 937px) {
    min-height: 115px;
    div:first-child {
      padding: 10px 0 2px 10px;
    }
  }
`;
