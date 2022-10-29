import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 87px 18px 43px 18px;
  height: 64px;
  width:937px;
  padding-right: 18px;
  gap:10px;

  h2 {
    color: #ffffff;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    padding-bottom: 7px;
  }


  @media (max-width: 937px) {
    margin-bottom: 19px;
    margin-top: 20px;
    width: 95vw;

   
    h2 {
      font-size: 33px;
      padding-bottom: 4px;
     
    }
    button{
      width: 70px;
    }

    img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
  }
  }
`;


export const UserInfo = styled.div `
display: flex;
  align-items: center;
  gap: 18px;
  word-break: break-all;

  h2 {
    color: #ffffff;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    padding-bottom: 7px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 937px) {

   
    h2 {
      font-size: 33px;
      padding-bottom: 4px;
     
    }

    img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
  }
  }
` 
  

