import styled from "styled-components";

export default function Url({ url }) {
  return (
    <UrlStyle href={url.path} target="_blank">
      <div>
        <h3>{url.title}</h3>
        <h5>{url.description}</h5>
        <p>{url.path}</p>
      </div>
      <div>
        <img
          src={url.image}
          alt="url"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png";
          }}
        />
      </div>
    </UrlStyle>
  );
}
const UrlStyle = styled.a`
  width: 100%;
  height: 155px;
  display: flex;
  border-radius: 16px;
  border: 1px solid #4c4c4c;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  overflow: hidden;
  padding-bottom: 20px;

  h3 {
    font-size: 16px;
    color: #cecece;
    margin-right: 30px;
  }

  h5 {
    font-size: 11px;
    color: #9b9595;
    margin: 10px 0;
    word-break: break-all;
  }

  p {
    font-size: 11px;
    color: #cecece;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 14px;
  }

  div:first-child {
    padding: 18px 10px 23px 19px;
    width: 80%;
  }

  div:last-child {
    width: 40%;
    min-height: 155px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 937px) {
    width: 100%;
    height: 115px;

    div:first-child {
      padding: 7px 0 10px 10px;
      h3 {
        font-size: 2.7vw;
      }

      p:nth-child(2),
      p:last-child {
        font-size: 80.4%;
        margin: 0;
        margin-right: 20px;
        height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p:nth-child(2) {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    div:last-child {
      width: 20%;
      min-width: 95px;
      img {
        width: 100%;
        height: 100%;
        max-height: 113px;
        border-radius: 0 16px 16px 0;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 560px) {
    font-size: 70%;
  }

  @media (max-width: 380px) {
    font-size: 50%;
  }
`;
