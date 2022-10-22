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
  width: 100%;
  height: 155px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #4c4c4c;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  h3 {
    font-size: 16px;
    color: #cecece;
    margin-right: 30px;
  }
  div:first-child {
    padding: 20px 10px 10px 19px;
    width: 100%;
    word-break: normal;
    margin-right: 10px;
    p:nth-child(2) {
      font-size: 11px;
      color: #9b9595;
      margin: 10px 0;
    }
    p:last-child {
      max-height: 23px;
      font-size: 11px;
      color: #cecece;
      word-break: break-all;
      overflow: hidden;
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
    height: 115px;
    border-radius: 13px;

    h3 {
      font-size: 16px;
      margin-right: 20px;
    }
    div:first-child {
      padding: 10px 10px 10px 19px;
      margin-right: 0px;
      p:nth-child(2) {
        font-size: 11px;
        margin: 10px 0;
        max-height: 25px;
        overflow: hidden;
      }
      p:last-child {
        max-height: 25px;
        font-size: 9px;
        line-height: 12px;
      }
    }
  }

  @media (max-width: 580px) {
    height: 115px;
    border-radius: 13px;

    h3 {
      font-size: 11px;
      margin-right: 0px;
    }
    div:first-child {
      padding: 10px 10px 10px 19px;
      margin-right: 0px;
      p:nth-child(2) {
        font-size: 9px;
        margin: 10px 0;
        max-height: 19px;
        line-height: 10px;
      }
      p:last-child {
        max-height: 23px;
        font-size: 9px;
      }
    }
  }
`;
