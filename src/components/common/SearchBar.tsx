export default function SearchBar({ placeholder }: { placeholder?: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Buscar..."}
      className="w-full max-w-sm rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
    />
  );
}
