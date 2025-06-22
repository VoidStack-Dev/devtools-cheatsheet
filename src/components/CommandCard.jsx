import { useState } from "react";

function CommandCard({ command, description }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md p-4 mb-4">
      <div className="flex justify-between items-start gap-2">
        <code className="block text-lg font-mono text-green-400">{command}</code>
        <button
          onClick={handleCopy}
          className="text-sm bg-gray-600 px-2 py-1 rounded hover:bg-gray-500"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
}

export default CommandCard;
