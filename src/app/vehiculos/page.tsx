import SearchBar from "@/components/common/SearchBar";
import SimpleTable from "@/components/tables/SimpleTable";

export default function VehiculosPage() {
  const rows = [
    { patente: "ABCJ11", vin: "WVWZZZ1JZXW000001", cliente: "Juan Soto" },
    { patente: "KJHG22", vin: "3N1AB7AP0GY000002", cliente: "María Díaz" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Vehículos</h2>
        <button className="rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-neutral-800">
          + Nuevo
        </button>
      </div>
      <SearchBar placeholder="Buscar por patente / VIN" />
      <SimpleTable
        columns={[
          { key: "patente", header: "Patente" },
          { key: "vin", header: "VIN" },
          { key: "cliente", header: "Cliente" },
        ]}
        rows={rows}
        emptyMessage="Sin vehículos."
      />
    </section>
  );
}
