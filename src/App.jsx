import styled from "styled-components";
import Effect from "./components/Effect";
import Logo from "./components/Logo";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Widget from "./components/Widget";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const StyledHeroDiv = styled.div`
  display: flex;
  background-color: yellow;
  flex: 4;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const StyledEffectBox = styled.div`
  background-color: orange;
`;

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  flex: 5;
`;

const StyledLogoDiv = styled.div`
  flex: 3;
  background-color: blue;
  padding: 10px;
  justify-items: center;
  align-content: center;
`;

const StyledInfoDiv = styled.div`
  flex: 6;
  background-color: green;
  padding: 10px;
  justify-items: center;
  align-content: center;
`;

const StyledInfoBox = styled.div`
  background-color: pink;
`;

const StyledWidgetDiv = styled.div`
  flex: 1;
  background-color: purple;
`;

import "./App.css";

function App() {
  return (
    <StyledWrapper>
      <StyledHeroDiv>
        <StyledEffectBox>
          <Effect />
        </StyledEffectBox>
      </StyledHeroDiv>
      <StyledContentDiv>
        <StyledLogoDiv>
          <Logo />
        </StyledLogoDiv>
        <StyledInfoDiv>
          <StyledInfoBox>
            <Info />
            <Projects />
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
