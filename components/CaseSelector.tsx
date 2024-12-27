import { useState } from "react";

const cases = [
  { id: 1, material: "Aluminum", image: "/images/aluminum.png", price: 399 },
  { id: 2, material: "Titanium", image: "/images/titanium.png", price: 699 },
];

export default function CaseSelector({ onCaseChange }) {
  const [selectedCase, setSelectedCase] = useState<number>(1);

  return (
    <div className="grid grid-cols-2 gap-4">
      {cases.map((watchCase) => (
        <div
          key={watchCase.id}
          className={`p-4 border ${selectedCase === watchCase.id ? "border-blue-500" : "border-gray-300"} cursor-pointer`}
          onClick={() => {
            setSelectedCase(watchCase.id);
            onCaseChange(watchCase.id, watchCase.price);
          }}
        >
          <img src={watchCase.image} alt={watchCase.material} className="h-20 mx-auto" />
          <p className="text-center">{watchCase.material}</p>
        </div>
      ))}
    </div>
  );
}
