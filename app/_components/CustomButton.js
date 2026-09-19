"use client";

export default function CustomButton({ children }) {
  //
  return (
    <button className="bg-green-600 w-[3rem] h-[0.5rem] font-bold text-primary-50 rounded-sm aspect-square">
      {children}
    </button>
  );
}

{
  Array.from({ length: 30 }, (_, i) => i + 1).map((x) => (
    <option value={x} key={x}>
      {x} {x === 1 ? "Guest" : "Guests"}
    </option>
  ));
}
