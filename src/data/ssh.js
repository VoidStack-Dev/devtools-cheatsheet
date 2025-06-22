const sshCommands = [
  { command: "ssh user@host", description: "Connect to a remote server via SSH" },
  { command: "ssh-keygen", description: "Generate a new SSH key pair" },
  { command: "ssh-copy-id user@host", description: "Copy SSH key to remote host" },
  { command: "scp file.txt user@host:/path", description: "Secure copy a file to a remote host" },
  { command: "scp user@host:/path/file.txt .", description: "Copy file from remote to local" },
  { command: "chmod 600 ~/.ssh/id_rsa", description: "Set correct permissions for private key" },
  { command: "ssh -i key.pem user@host", description: "SSH with a specific private key" },
  { command: "ssh -L 8080:localhost:80 user@host", description: "Create an SSH tunnel" },
  { command: "ssh -N -f -L localhost:3306:remotehost:3306 user@remotehost", description: "Port forwarding without shell" },
];
export default sshCommands;
