const gitCommands = [
  { command: "git init", description: "Initialize a new Git repository" },
  { command: "git clone URL", description: "Clone a repo from GitHub or remote" },
  { command: "git status", description: "Show current changes and staging status" },
  { command: "git add .", description: "Stage all changes" },
  { command: "git commit -m 'msg'", description: "Commit staged changes with message" },
  { command: "git push origin main", description: "Push commits to remote repo" },
  { command: "git pull", description: "Fetch and merge remote changes" },
  { command: "git branch", description: "List branches" },
  { command: "git checkout -b new-branch", description: "Create and switch to a new branch" },
  { command: "git merge branch", description: "Merge a branch into current branch" },
  { command: "git log", description: "View commit history" },
  { command: "git stash", description: "Temporarily save uncommitted changes" },
  { command: "git reset --hard HEAD", description: "Undo all local changes" },
  { command: "git remote -v", description: "Show remote URLs" },
  { command: "git config --global user.name 'Your Name'", description: "Set global Git username" },
];
export default gitCommands;
