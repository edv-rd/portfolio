import styled from "styled-components";

const StyledInfoText = styled.h1``;

const Info = () => {
  return (
    <StyledInfoText>
      Hej! My name is Edvard. Welcome to my homepage. If you want to contact me,{" "}
      <a href="">feel free.</a>
    </StyledInfoText>
  );
};

export default Info;
