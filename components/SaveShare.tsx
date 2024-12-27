export default function SaveShare() {
  const handleSave = () => alert("Configuration saved!");
  const handleShare = () => alert("Share link copied!");

  return (
    <div className="flex gap-4 mt-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
        Save
      </button>
      <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleShare}>
        Share
      </button>
    </div>
  );
}
