import { useState } from "react";

function CommandCard({ command, description }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-5 mb-4 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start gap-2">
        <code className="text-green-400 text-base md:text-lg font-mono break-all">
          {command}
        </code>
        <button
          onClick={handleCopy}
          className="text-xs md:text-sm bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded-md"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>
      <p className="mt-2 text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  );
}

export default CommandCard;
