"use client";

export default function Localization() {
  const handleLocalization = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=0.349513,-78.107749`,
        "_blank"
      );
    }
  };
  return (
    <button
      className="flex w-full bg-blue-500 p-4 rounded-lg justify-center"
      onClick={handleLocalization}
    >
      Ubicación
    </button>
  );
}
