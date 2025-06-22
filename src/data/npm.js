const npmCommands = [
  { command: "npm init -y", description: "Create package.json with defaults" },
  { command: "npm install", description: "Install all dependencies listed in package.json" },
  { command: "npm install package", description: "Install a specific package" },
  { command: "npm install -g package", description: "Globally install a package" },
  { command: "npm uninstall package", description: "Remove a package" },
  { command: "npm update", description: "Update installed packages" },
  { command: "npm run dev", description: "Run the development script" },
  { command: "npm run build", description: "Build the project" },
  { command: "npm run <script>", description: "Run a custom script defined in package.json" },
  { command: "npx create-react-app myapp", description: "Create a new React app" },
  { command: "npm audit", description: "Check for security vulnerabilities" },
  { command: "npm audit fix", description: "Fix vulnerabilities automatically" },
];
export default npmCommands;
