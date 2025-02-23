import styled from "styled-components";

const projectArray = [
  {
    name: "PuzzleHub",
    url: "http://puzzlehub.edvardshemsida.se",
    info: "Gather all your results for your little games (Wordle, Connections, Mini Crossword, etc) and get formatted daily statistics to show your friends! Now also with global leaderboards!",
  },
  {
    name: "Kille Online",
    url: "https://kille-frontend.onrender.com/",
    info: "Do you want to play a game of Kille online with your friends? Well, now you can!",
  },
];

const StyledProjects = styled.div``;

const Projects = () => {
  return (
    <>
      Here are some things I made:
      {projectArray.map((project) => (
        <StyledProjects key={project.name}>
          {project.name} - {project.info} - <a href={project.url}>Try it!</a>
        </StyledProjects>
      ))}
    </>
  );
};

export default Projects;
