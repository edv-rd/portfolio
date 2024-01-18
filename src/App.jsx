import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  height: calc(100vh - 50px);
  width: 100vw;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--main-bg-color)"};
`;

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100vw;
  height: 50px;

  /* mix-blend-mode: difference; */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--main-bg-color)"};
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10vw;
  height: 100%;
`;

const StyledLink = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
  font-size: 20px;
  border-bottom: 5px solid;
  border-color: black;

  &:hover {
    border-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "var(--main-bg-color)"};
  }
`;

import "./App.css";

function App() {
  const [homeRef, homeInView] = useInView({});
  const [workRef, workInView] = useInView({ threshold: 0.9 });
  const [contactRef, contactInView] = useInView({});

  return (
    <StyledWrapper>
      <StyledNavbar
        backgroundColor={
          homeInView
            ? "var(--main-bg-color)"
            : workInView
            ? "var(--secondary-bg-color)"
            : contactInView
            ? "var(--tertiary-bg-color)"
            : "var(--secondary-bg-color)"
        }
      >
        <StyledLink
          href="#"
          color={
            homeInView
              ? "var(--secondary-bg-color)"
              : workInView
              ? "var(--tertiary-bg-color)"
              : contactInView
              ? "var(--main-bg-color)"
              : "var(--secondary-bg-color)"
          }
        >
          edvard
        </StyledLink>
        <StyledNavLinks>
          <StyledLink href="#me">me</StyledLink>

          <StyledLink backgroundColor="var(--secondary-bg-color)" href="#work">
            work
          </StyledLink>

          <StyledLink
            backgroundColor="var(--tertiary-bg-color)"
            href="#contact"
          >
            contact
          </StyledLink>
        </StyledNavLinks>
      </StyledNavbar>
      <StyledSection ref={homeRef}>Presentation</StyledSection>
      <StyledSection backgroundColor="var(--secondary-bg-color)" ref={workRef}>
        Projekt
      </StyledSection>
      <StyledSection
        backgroundColor="var(--tertiary-bg-color)"
        ref={contactRef}
      >
        Contact
      </StyledSection>
    </StyledWrapper>
  );
}

export default App;
