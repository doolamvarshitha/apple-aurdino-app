const bands = [
  { id: 1, style: "Solo Loop", color: "Blue", image: "/images/solo-loop-blue.png", price: 49 },
  { id: 2, style: "Braided", color: "Red", image: "/images/braided-red.png", price: 99 },
];

export default function BandSelector({ onBandChange }) {
  return (
    <div className="flex overflow-x-auto gap-4">
      {bands.map((band) => (
        <div
          key={band.id}
          className="cursor-pointer border border-gray-300 p-2"
          onClick={() => onBandChange(band.id, band.price)}
        >
          <img src={band.image} alt={band.style} className="h-20" />
          <p>{band.style} - {band.color}</p>
        </div>
      ))}
    </div>
  );
}
