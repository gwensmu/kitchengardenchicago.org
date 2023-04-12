import header from "./images/header.jpg";
import { Link } from "react-router-dom";
import { AppContainer, Title, Heading, HeaderImage, Text } from "./styles";

function Board() {
  return (
    <AppContainer>
      <header className="App-header">
        <HeaderImage src={header}></HeaderImage>
      </header>

      <Title>Now Recruiting: Board Members</Title>
      <Text>
        Kitchen Garden Chicago is seeking up to five founding board members! A
        board seat is a 2 year minimum commitment. Board members should expect
        to donate a minimum of 10 hours of time per quarter. There is no
        requirement that board members donate money.
      </Text>

      <Text>
        If you are interested in joining, or want to learn more, email
        gwen.smuda@gmail.com
      </Text>

      <Heading>Responsibilities</Heading>

      <Text>
        In 2023, founding board members will support the founder in establishing
        Kitchen Garden Chicago as a not-for-profit organization. For more
        details,{" "}
        <Link to="https://docs.google.com/document/d/1LIG4WZt53AjC4pWwDEot1ILtA2V3iRcKyaPkEieuuGg/edit">
          request access to: Kitchen Garden Chicago - 3 year plan
        </Link>
      </Text>

      <Text>
        After incorporation, board members will:
        <ul>
          <li>
            Meet quarterly to oversee the operation of Kitchen Garden Chicago
          </li>
          <li>Develop the long-term strategy of the organization</li>
          <li>Support fundraising by soliciting donations and grants</li>
          <li>
            Support KGP programs by recruiting and training volunteers, liaising
            with partner organizations, and measuring program outcomes
          </li>
        </ul>
      </Text>

      <Text>
        Board members may be elected to serve as officers, including Chair,
        Secretary and Treasurer
      </Text>

      <Heading>Qualifications</Heading>
      <Text>
        No previous board member experience is required, but ideal candidates
        will have experience with or a passion for community building,
        gardening, senior wellbeing, and/or hands-on volunteering.
      </Text>
    </AppContainer>
  );
}

export default Board;
