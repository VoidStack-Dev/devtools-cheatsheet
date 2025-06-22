export default [
  { command: "docker build -t myapp .", description: "Build image from Dockerfile" },
  { command: "docker run -p 3000:3000 myapp", description: "Run container with port mapping" }
];
