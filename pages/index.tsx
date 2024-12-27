import { useState } from "react";
import CaseSelector from "../components/CaseSelector";
import BandSelector from "../components/BandSelector";
import SizeSelector from "../components/SizeSelector";
import CollectionSwitcher from "../components/CollectionSwitcher";
import PriceDisplay from "../components/PriceDisplay";
import SaveShare from "../components/SaveShare";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
  const [selectedCasePrice, setSelectedCasePrice] = useState(399);
  const [selectedSizePrice, setSelectedSizePrice] = useState(0);
  const [selectedBandPrice, setSelectedBandPrice] = useState(49);
  const [collection, setCollection] = useState("Series 10");

  const totalPrice = selectedCasePrice + selectedSizePrice + selectedBandPrice;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Apple Watch Studio</h1>

      <CollectionSwitcher onCollectionChange={setCollection} />
      <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">
        Apple Watch Studio - Image Gallery
      </h1>
       <ImageGallery />

      {/* Additional content or footer can go here */}
    </div>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div>
          <img src="/images/watch-preview.png" alt="Watch Preview" className="w-full" />
        </div>
        <div>
          <CaseSelector onCaseChange={(id, price) => setSelectedCasePrice(price)} />
          <SizeSelector onSizeChange={(id, price) => setSelectedSizePrice(price)} />
          <BandSelector onBandChange={(id, price) => setSelectedBandPrice(price)} />
          <PriceDisplay totalPrice={totalPrice} />
          <SaveShare />
        </div>
      </div>
    </div>
  );
}
