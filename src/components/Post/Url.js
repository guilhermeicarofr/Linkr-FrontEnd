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
  /* max-width: 503px; */
  width: 100%;
  height: 155px;
  display: flex;
  border-radius: 16px;
  border: 1px solid #4c4c4c;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  h3 {
    font-size: 16px;
    color: #cecece;
    margin-right: 30px;
  }
  div:first-child {
    padding: 18px 10px 23px 19px;
    width: 80%;
    p:nth-child(2) {
      font-size: 11px;
      color: #9b9595;
      margin: 10px 0;
      word-break: break-all;
    }
    p:last-child {
      font-size: 11px;
      color: #cecece;
      word-break: break-all;
    }
  }
  div:last-child {
    width: 40%;
    min-height: 155px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0 16px 16px 0;
      object-fit: cover;
    }
  }
  @media (max-width: 937px) {
    width: 100%;

    min-height: 140px;
    div:first-child {
      padding: 10px 0 10px 10px;
      h3 {
        font-size: 2.9vw;
      }

      p:nth-child(2),
      p:last-child {
        font-size: 90.4%;
        margin-right: 10px;
      }
    }

    div:last-child {
      width: 20%;
      min-width: 95px;
    }
  }

  @media (max-width: 560px) {
    font-size: 70%;
  }

  @media (max-width: 380px) {
    font-size: 50%;
  }
`;
