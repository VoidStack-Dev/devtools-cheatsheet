const gitCommands = [
  {
    command: "git init",
    description: "Initialize a new Git repository in the current directory.",
  },
  {
    command: "git clone <url>",
    description: "Clone a remote repository to your local machine.",
  },
  {
    command: "git status",
    description: "Show the working directory and staging area status.",
  },
  {
    command: "git add .",
    description: "Add all changes to the staging area.",
  },
  {
    command: "git commit -m 'message'",
    description: "Record changes to the repository with a message.",
  },
  {
    command: "git push origin main",
    description: "Push committed changes to the remote `main` branch.",
  },
];

export default gitCommands;
