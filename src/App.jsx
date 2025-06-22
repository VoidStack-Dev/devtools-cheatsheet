import { useState } from "react";
import CommandCard from "./components/CommandCard";

import linuxCommands from "./data/linux";
import gitCommands from "./data/git";
import npmCommands from "./data/npm";
import dockerCommands from "./data/docker";
import sshCommands from "./data/ssh";

function App() {
  const [category, setCategory] = useState("linux");
  const [search, setSearch] = useState("");

  const categories = {
    linux: linuxCommands,
    git: gitCommands,
    npm: npmCommands,
    docker: dockerCommands,
    ssh: sshCommands,
  };

  const filteredCommands = categories[category].filter((cmd) =>
    cmd.command.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">🚀 DevTools Cheat Sheet</h1>

      <div className="flex flex-wrap gap-3 mb-4">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`capitalize px-4 py-2 rounded-lg transition ${
              category === cat
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="🔍 Search commands..."
        className="w-full p-3 mb-6 rounded bg-gray-800 text-white border border-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCommands.length > 0 ? (
        filteredCommands.map((cmd, index) => (
          <CommandCard
            key={index}
            command={cmd.command}
            description={cmd.description}
          />
        ))
      ) : (
        <p className="text-gray-400">No commands match your search.</p>
      )}
    </div>
  );
}

export default App;
