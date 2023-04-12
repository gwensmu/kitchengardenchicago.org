import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const Title = styled.h1`
  color: black;
  font-size: 3em;
  margin-left: 0.3em;
`;

const Heading = styled.h2`
  color: black;
  font-size: 2em;
  margin-left: 0.5em;
`;

const HeaderImage = styled.img`
  max-width: 100%;
  max-height: 30em;
`;

const Text = styled.p`
  color: black;
  font-size: 1em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: -0.2em;
  max-width: 100%;
`;

export { AppContainer, Title, Heading, HeaderImage, Text };
