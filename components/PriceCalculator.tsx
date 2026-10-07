'use client';

import {useState} from 'react';
import {Calculator, MessageSquare, Phone, Info, Plus, Minus, Check, MapPin} from 'lucide-react';

export default function PriceCalculator() {
  const [quantity, setQuantity] = useState<number>(3000);
  const [selectedProduct, setSelectedProduct] = useState<string>('PVC Red Bricks');
  const [location, setLocation] = useState<string>('Karimnagar / Hyderabad');
  const [copied, setCopied] = useState(false);
  const pricePerBrick = 9;

  const quickPresets = [1000, 2500, 5000, 10000, 20000];
  const brickTypes = [
    {name: 'PVC Red Bricks', stamp: 'PVC', desc: 'Premium Quality · High Density'},
    {name: 'RBS Red Bricks', stamp: 'RBS', desc: 'First Quality · Sharp Edges'},
    {name: 'VBS Red Bricks', stamp: 'VBS', desc: 'Heavy Construction Grade'},
  ];

  const handleQuantityChange = (val: number) => {
    if (isNaN(val)) {
      setQuantity(0);
      return;
    }
    const sanitized = Math.max(100, Math.min(100000, val));
    setQuantity(sanitized);
  };

  const handleIncrement = (amount: number) => {
    setQuantity((prev) => Math.max(100, Math.min(100000, prev + amount)));
  };

  const totalAmount = quantity * pricePerBrick;
  const estimatedTruckloads = Math.ceil(quantity / 3000);

  const formattedQuantity = quantity.toLocaleString('en-IN');
  const formattedTotal = totalAmount.toLocaleString('en-IN');

  const whatsappMessage = `Hello Karimnagar Red Bricks / VS Bricks Supply, I would like to get a quote for ${formattedQuantity} ${selectedProduct} at ₹9/brick (Estimated Total: ₹${formattedTotal}). Delivery location: ${location} (Telangana). Please confirm delivery timeline and transport charges.`;
  const whatsappUrl = `https://wa.me/919606948371?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(
      `Karimnagar Red Bricks Quote: ${formattedQuantity} ${selectedProduct} @ ₹9/brick = ₹${formattedTotal}. Delivery Area: All Over Telangana. Contact: 9606948371`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="calculator"
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1816] overflow-hidden border-b border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B83824] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
            <span aria-hidden="true">·</span>
            <span>All Over Telangana Supply</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#1A1816] leading-none mb-6 text-balance">
            Estimate your brick requirement.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Select your brick type (<strong>PVC</strong>, <strong>RBS</strong>, or <strong>VBS</strong>) and calculate your project total at <strong>₹9 per brick</strong>. Instant WhatsApp booking across Telangana.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Input Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Product Variety Selector */}
              <div>
                <label className="block font-display text-base font-bold uppercase tracking-tight text-[#1A1816] mb-2">
                  Select Brick Type (₹9 each)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {brickTypes.map((brick) => (
                    <button
                      key={brick.name}
                      type="button"
                      onClick={() => setSelectedProduct(brick.name)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedProduct === brick.name
                          ? 'bg-[#B83824]/10 border-[#B83824] ring-2 ring-[#B83824]/20'
                          : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold uppercase text-[#1A1816]">
                          {brick.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 font-bold text-neutral-700">
                          {brick.stamp}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 block mt-1">
                        {brick.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Input */}
              <div>
                <label
                  htmlFor="brick-quantity"
                  className="block font-display text-base font-bold uppercase tracking-tight text-[#1A1816] mb-2"
                >
                  Enter Number of Bricks
                </label>
                
                {/* Number Input with Stepper */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleIncrement(-500)}
                    aria-label="Decrease quantity by 500"
                    className="w-12 h-14 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer active:scale-95"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  
                  <div className="relative flex-1">
                    <input
                      id="brick-quantity"
                      type="number"
                      min={100}
                      max={100000}
                      step={100}
                      value={quantity === 0 ? '' : quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                      className="w-full h-14 px-4 font-mono text-2xl font-bold text-[#1A1816] bg-neutral-50 border-2 border-neutral-200 rounded-xl focus:border-[#B83824] focus:outline-none transition-colors tabular-nums"
                      placeholder="e.g. 3000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-neutral-400 uppercase">
                      Bricks
                    </span>
                  </div>

                  <button
                    onClick={() => handleIncrement(500)}
                    aria-label="Increase quantity by 500"
                    className="w-12 h-14 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer active:scale-95"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Slider Control */}
              <div className="flex flex-col gap-2">
                <input
                  type="range"
                  min={500}
                  max={25000}
                  step={500}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                  aria-label="Brick quantity slider"
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#B83824]"
                />
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                  <span>500</span>
                  <span>10,000</span>
                  <span>25,000+</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 block mb-2 font-sans">
                  Quick Select Presets
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuantity(preset)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                        quantity === preset
                          ? 'bg-[#B83824] text-white shadow-md'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {preset.toLocaleString('en-IN')} bricks
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Notice */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-xs">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold uppercase tracking-wider text-[11px] block">
                    Supply Across Telangana:
                  </span>
                  <span className="font-medium">
                    Delivery in all over Telangana. Transport & unloading charges coordinated directly on WhatsApp based on location.
                  </span>
                </div>
              </div>
            </div>

            {/* Output Summary Column */}
            <div className="lg:col-span-5 bg-[#181614] text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#B83824] mb-2 font-semibold">
                  Quotation Breakdown
                </div>

                <div className="py-3 border-b border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 uppercase font-medium">
                    Selected Product
                  </span>
                  <span className="font-display text-sm font-bold text-white">
                    {selectedProduct}
                  </span>
                </div>

                <div className="py-3 border-b border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 uppercase font-medium">
                    Rate per brick
                  </span>
                  <span className="font-mono text-base font-bold text-white">
                    Just ₹9 Only
                  </span>
                </div>

                <div className="py-3 border-b border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 uppercase font-medium">
                    Brick Count
                  </span>
                  <span className="font-mono text-base font-bold text-white">
                    {formattedQuantity}
                  </span>
                </div>

                <div className="py-3 border-b border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 uppercase font-medium">
                    Service Area
                  </span>
                  <span className="font-sans text-xs text-[#B83824] font-semibold">
                    All Over Telangana
                  </span>
                </div>

                {/* Big Total */}
                <div className="pt-5 pb-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    Estimated Brick Cost
                  </span>
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    ₹{formattedTotal}
                  </div>
                  <span className="text-[11px] text-neutral-400 block mt-1">
                    Zero breakage · Uncompromised quality & count
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#B83824] hover:bg-[#982B1B] rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Quote on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyQuote}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Copied Summary</span>
                      </>
                    ) : (
                      <span>Copy Estimate</span>
                    )}
                  </button>

                  <a
                    href="tel:9606948371"
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B83824]" />
                    <span>Call 9606948371</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

