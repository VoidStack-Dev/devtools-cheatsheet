function CommandCard({ command, description }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md p-4 mb-4 hover:bg-gray-700 transition">
      <code className="block text-lg font-mono text-green-400">{command}</code>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
}

export default CommandCard;
