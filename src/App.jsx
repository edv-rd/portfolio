import styled from "styled-components";
import Effect from "./components/Effect";
import Logo from "./components/Logo";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Widget from "./components/Widget";
import "./App.css";

const FlexContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const StyledHeroDiv = styled(FlexContainer)`
  flex: 4;
  //background-color: yellow;
  justify-content: center;
  align-items: center;
`;

const StyledContentDiv = styled(FlexContainer)`
  flex-direction: column;
  //background-color: red;
  flex: 5;
  padding: 0;
`;

const ContentSection = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
`;

const StyledLogoDiv = styled(ContentSection)`
  flex: 3;
  //background-color: blue;
`;

const StyledInfoDiv = styled(ContentSection)`
  flex: 6;
  //background-color: green;
`;

const StyledInfoBox = styled.div`
  //background-color: pink;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InfoBoxElement = styled.div`
  flex: 2;
`;

const StyledInfoElement = styled(InfoBoxElement)`
  //background-color: white;
`;

const StyledProjectsElement = styled(InfoBoxElement)`
  //background-color: brown;
`;

const StyledWidgetDiv = styled(ContentSection)`
  flex: 1;
  //background-color: purple;
`;

function App() {
  return (
    <StyledWrapper>
      <StyledHeroDiv>
        <Effect />
      </StyledHeroDiv>
      <StyledContentDiv>
        <StyledLogoDiv>
          <Logo />
        </StyledLogoDiv>
        <StyledInfoDiv>
          <StyledInfoBox>
            <StyledInfoElement>
              <Info />
            </StyledInfoElement>
            <StyledProjectsElement>
              <Projects />
            </StyledProjectsElement>
          </StyledInfoBox>
        </StyledInfoDiv>
        <StyledWidgetDiv>
          <Widget />
        </StyledWidgetDiv>
      </StyledContentDiv>
    </StyledWrapper>
  );
}

export default App;
