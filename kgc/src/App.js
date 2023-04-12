import { Link } from "react-router-dom";
import header from "./images/header.jpg";
import { AppContainer, Title, Heading, HeaderImage, Text } from "./styles";

function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <HeaderImage
          src={header}
          alt="A tomato plant growing in a crack in a wall."
        />
        <Title>Kitchen Garden Chicago</Title>
      </header>

      <Heading>Mission</Heading>
      <Text>
        The Kitchen Garden Project (KGP) aims to connect isolated Chicago
        seniors with social engagement, increased food security, and sense of
        purpose by providing them a kitchen garden and a dedicated, weekly
        volunteer Garden Partner to help them tend it.
      </Text>
      <Text>
        Operationally, KGP will achieve this mission by providing and
        maintaining the infrastructure of these kitchen gardens and training and
        coordinating the volunteer Garden Partners. To meet the social services
        needs of seniors in the program, KGP will work with established
        Chicagoland organizations who serve senior populations to identify
        candidate seniors for the program as well as ensure that they have
        access to the services they need to safely participate.
      </Text>

      <Heading>Motivation</Heading>
      <Text>
        Gwen Smuda is the founder of the Kitchen Garden Project. She started her
        own kitchen garden in 2020 during the COVID-19 "lockdown." While
        outside, tending to her tomatoes, she got to know many of her neighbors
        as they passed by - forming local bonds that she hadn't experienced
        before in Chicago. Gwen began volunteering with various urban farming
        programs around Chicago, and as she pulled weeds she learned more about
        successful structures for non-profit urban agriculture.
      </Text>
      <Text>
        The vision for the Kitchen Garden Project emerged from several
        observations:
        <ul>
          <li>
            Macro trends such as inflation and climate change imperil fresh
            foodways, and it will become increasingly difficult for lower
            income, lower mobility groups like seniors to access fresh, healthy
            foods
          </li>
          <li>
            Community gardens in Chicago are largely inaccessible for Chicago
            seniors who have limited mobility
          </li>
          <li>
            Quality of life for independent seniors is deeply tied to social
            connection and sense of purpose - assisted living communities that
            add pets or plants to their spaces see dramatic increases in the
            health and wellbeing of their occupants
          </li>
        </ul>
        By connecting Chicago seniors with kitchen gardens and a volunteer
        gardener, KGP aims to fill an urban gardening niche that improves the
        health and wellbeing of our seniors and our communities.
      </Text>

      <Heading>Structure</Heading>
      <Text>
        KGP will be formed as a 501(c)(3) not for profit organization. It will
        have a <Link to="/board">founding board</Link> of six members to provide
        governance.
        <Link to="https://docs.google.com/document/d/1LIG4WZt53AjC4pWwDEot1ILtA2V3iRcKyaPkEieuuGg/edit">
          Kitchen Garden Chicago - 3 year plan
        </Link>
      </Text>
    </AppContainer>
  );
}

export default App;
