"use client";

import { useState } from 'react';

export default function PerpsPage() {
  const [size, setSize] = useState('100');
  const [leverage, setLeverage] = useState('5');

  const handleOpenPosition = () => {
    alert(`Opened ${size} position with ${leverage}x leverage (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Perpetuals Trading</h1>

      <div className="space-y-5">
        <div>
          <label className="block text-sm mb-2">Position Size</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-4 border rounded-2xl text-xl"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Leverage</label>
          <input
            type="text"
            value={leverage}
            onChange={(e) => setLeverage(e.target.value)}
            className="w-full p-4 border rounded-2xl text-xl"
          />
        </div>

        <button
          onClick={handleOpenPosition}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl text-lg font-semibold mt-4"
        >
          Open Position
        </button>
      </div>
    </div>
  );
}