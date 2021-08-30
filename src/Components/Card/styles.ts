import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 10px 15px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;

  @media screen and (max-width: 900px) {
    width: 40%;
    margin: 20px 0;
  }
  @media screen and (max-width: 650px) {
    width: 300px;
  }
`;

export const Header = styled.div``;

export const HeaderTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #8798ad;
`;

export const Body = styled.section``;

export const ContainerWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTitle = styled.h3`
  font-weight: normal;
  font-size: 18px;
  color: #274264;
  margin-bottom: 20px;
  max-width: 200px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const ContentSubTitle = styled.span`
  font-size: 14px;
  color: #21d170;
  margin-top: 20px;
  display: inline-block;
`;

export const Icon = styled.img`
  width: 26px;
  height: 26px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const NumberWrapper = styled.div`
  display: flex;
`;

export const Number = styled.span`
  font-size: 18px;
  color: #274264;
  margin-right: 10px;
`;

export const Label = styled.span`
  font-size: 9px;
  text-align: justify;
  text-transform: uppercase;
  color: #8798ad;
`;

export const Break = styled.br``;

export const Footer = styled.div``;

export const Address = styled.h5`
  font-size: 14px;
  color: #8798ad;
  margin-block-start: 0;
  margin-block-end: 0;
`;
