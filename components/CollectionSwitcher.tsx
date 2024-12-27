const collections = ["Series 10", "Hermès", "SE"];

export default function CollectionSwitcher({ onCollectionChange }) {
  return (
    <select
      onChange={(e) => onCollectionChange(e.target.value)}
      className="border p-2 rounded"
    >
      {collections.map((collection, index) => (
        <option key={index} value={collection}>
          {collection}
        </option>
      ))}
    </select>
  );
}
