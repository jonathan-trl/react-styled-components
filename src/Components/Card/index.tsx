import React from "react";
import Button from "../Button";
import {
  CardWrapper,
  Header,
  HeaderTitle,
  Body,
  ContainerWrapper,
  ContentWrapper,
  ContentTitle,
  ContentSubTitle,
  Icon,
  InfoWrapper,
  NumberWrapper,
  Footer,
  Address,
  Label,
  Number,
  Break,
} from "./styles";
import LogoService from "../../Assets/img/service.png";
import LogoList from "../../Assets/img/list.png";
import LogoDonate from "../../Assets/img/donate.png";

interface CardProps {
  type: "service" | "list" | "donate";
  title: string;
}

const Card = (props: CardProps) => {
  return (
    <CardWrapper>
      <Header>
        <HeaderTitle>
          {props.type === "service"
            ? "Vaga de voluntariado"
            : props.type === "list"
            ? "Doação de materiais"
            : "Camapanha de Arrecadação"}
        </HeaderTitle>
      </Header>
      <Body>
        <ContainerWrapper>
          <ContentWrapper>
            <ContentTitle>{props.title}</ContentTitle>
            <Icon
              src={
                props.type === "service"
                  ? LogoService
                  : props.type === "list"
                  ? LogoList
                  : LogoDonate
              }
            />
          </ContentWrapper>
          <ContentSubTitle>SP Invisível</ContentSubTitle>
        </ContainerWrapper>
        <InfoWrapper>
          <NumberWrapper>
            {props.type === "service" ? (
              <>
                <Number>2-6</Number>
                <Label>
                  Horas <Break />
                  Semanais
                </Label>
              </>
            ) : props.type === "list" ? (
              <>
                <Number>36</Number>
                <Label>
                  Itens <Break />
                  Disponíveis
                </Label>
              </>
            ) : (
              <>
                <Number>R$ 5.000</Number>
                <Label>
                  Valor <Break />
                  esperado
                </Label>
              </>
            )}
          </NumberWrapper>
          <Button buttonType="primary">
            {props.type === "service"
              ? "Participar"
              : props.type === "list"
              ? "Doar"
              : "Contribuir"}
          </Button>
        </InfoWrapper>
      </Body>
      <Footer>
        <Address>Natal, RN</Address>
      </Footer>
    </CardWrapper>
  );
};

export default Card;
