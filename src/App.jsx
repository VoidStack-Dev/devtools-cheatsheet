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
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8 md:px-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
        🚀 DevTools Cheat Sheet
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`capitalize px-4 py-2 rounded-xl font-semibold transition ${
              category === cat
                ? "bg-green-600 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="🔍 Search commands..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {filteredCommands.length > 0 ? (
          filteredCommands.map((cmd, index) => (
            <CommandCard
              key={index}
              command={cmd.command}
              description={cmd.description}
            />
          ))
        ) : (
          <p className="text-gray-400 text-center">No commands match your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
