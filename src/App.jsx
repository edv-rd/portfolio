import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPresentationTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

import "./App.css";

function App() {
  return (
    <StyledWrapper>
      <StyledPresentationWrapper>
        <StyledPresentationTextArea>
          <h1>Hej!</h1>
        </StyledPresentationTextArea>
      </StyledPresentationWrapper>
    </StyledWrapper>
  );
}

export default App;
