const sizes = [
  { id: 1, size: 42, price: 0 },
  { id: 2, size: 46, price: 50 },
];

export default function SizeSelector({ onSizeChange }) {
  return (
    <div className="flex gap-4">
      {sizes.map((sizeOption) => (
        <button
          key={sizeOption.id}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          onClick={() => onSizeChange(sizeOption.id, sizeOption.price)}
        >
          {sizeOption.size}mm
        </button>
      ))}
    </div>
  );
}
