const dockerCommands = [
  {
    command: "docker build -t app-name .",
    description: "Build a Docker image from the current directory.",
  },
  {
    command: "docker run -p 3000:3000 app-name",
    description: "Run a container with port mapping.",
  },
];
export default dockerCommands;
