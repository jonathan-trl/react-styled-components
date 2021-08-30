import styled from "styled-components";

export const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  @media screen and (max-width: 1300px) {
    max-width: 800px;
  }

  @media screen and (max-width: 900px) {
    max-width: 600px;
  }

  @media screen and (max-width: 650px) {
    max-width: 90%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: normal;
  font-size: 24px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #274264;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const GeolocationWrapper = styled.div`
  margin-left: 30px;
`;

export const GeolocationText = styled.span`
  font-size: 15px;
  color: #8798ad;
  margin-right: 20px;
`;

export const Body = styled.section`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1300px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

export const Footer = styled.footer``;
