import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import CustomSwitch from "../../Components/CustomSwitch";
import {
  Body,
  ContainerWrapper,
  Footer,
  GeolocationText,
  GeolocationWrapper,
  Header,
  HeaderTitle,
} from "./styles";

interface IOpportunities {
  type: "service" | "list" | "donate";
  title: string;
}

const Page = () => {
  const [geolocationChecked, setGeolocationChecked] = useState(true);

  const [opportunities, setOpportunities] = useState<IOpportunities[]>([]);

  useEffect(() => {
    setOpportunities([
      {
        type: "service",
        title: "Entrega de roupas e alimentos para moradores de rua",
      },
      {
        type: "service",
        title: "Entrega de roupas e alimentos para moradores de rua",
      },
      {
        type: "service",
        title: "Arrecadação de alimentos para moradores de rua",
      },
      {
        type: "list",
        title: "Entrega de roupas e alimentos para moradores de rua",
      },
      {
        type: "list",
        title: "Entrega de roupas e alimentos para moradores de rua",
      },
      {
        type: "list",
        title: "Entrega de roupas e alimentos para moradores de rua",
      },
      {
        type: "donate",
        title: "Entrega de roupas e alimentos para moradores de rua",
      },
      {
        type: "service",
        title: "Arrecadação de alimentos para moradores de rua",
      },
      {
        type: "list",
        title: "Entrega de roupas e alimentos para moradores de rua",
      }
    ]);
  }, []);

  return (
    <ContainerWrapper>
      <Header>
        <HeaderTitle>Oportunidades em destaque</HeaderTitle>
        <GeolocationWrapper>
          <GeolocationText>
            {geolocationChecked
              ? "Geolocalização Ativa"
              : "Geolocalização Desativada"}
          </GeolocationText>
          <CustomSwitch
            checked={geolocationChecked}
            color="primary"
            onChange={() => setGeolocationChecked(!geolocationChecked)}
            name="geolocation"
          />
        </GeolocationWrapper>
      </Header>
      <Body>
        {opportunities &&
          opportunities.map((opportunity, id) => {
            return (
              <Card
                key={id}
                type={opportunity.type}
                title={opportunity.title}
              />
            );
          })}
      </Body>
      <Footer>
        <Button buttonType="secondary">Todas as Oportunidades</Button>
      </Footer>
    </ContainerWrapper>
  );
};

export default Page;
