export default function PriceDisplay({ totalPrice }) {
  return (
    <div className="text-lg font-bold">
      Total Price: ${totalPrice.toFixed(2)}
    </div>
  );
}
