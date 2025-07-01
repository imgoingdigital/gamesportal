'use client';

export default function PrintButton() {
  return (
    <div className="flex justify-end mb-4 print:hidden">
      <button
        onClick={() => window.print()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded transition-colors text-sm shadow"
      >
        Print CV
      </button>
    </div>
  );
}