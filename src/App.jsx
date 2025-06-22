import CommandCard from "./components/CommandCard";
import linuxCommands from "./data/linux";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl text-white font-bold mb-6">
        🐧 Linux Command Cheat Sheet
      </h1>

      {linuxCommands.map((cmd, index) => (
        <CommandCard
          key={index}
          command={cmd.command}
          description={cmd.description}
        />
      ))}
    </div>
  );
}

export default App;
