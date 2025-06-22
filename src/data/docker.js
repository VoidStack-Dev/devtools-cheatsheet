const dockerCommands = [
  { command: "docker --version", description: "Check installed Docker version" },
  { command: "docker ps", description: "List running containers" },
  { command: "docker ps -a", description: "List all containers (running and stopped)" },
  { command: "docker images", description: "List downloaded Docker images" },
  { command: "docker pull image", description: "Download an image from Docker Hub" },
  { command: "docker run -it image", description: "Run a container in interactive mode" },
  { command: "docker run -d -p 80:80 image", description: "Run a container detached with port mapping" },
  { command: "docker stop container_id", description: "Stop a running container" },
  { command: "docker rm container_id", description: "Remove a container" },
  { command: "docker rmi image_id", description: "Remove an image" },
  { command: "docker build -t name .", description: "Build image from Dockerfile" },
  { command: "docker exec -it container bash", description: "Enter running container shell" },
];
export default dockerCommands;
