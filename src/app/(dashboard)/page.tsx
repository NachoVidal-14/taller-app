import DashboardCards from "./components/DashboardCards";
import SearchBar from "@/components/common/SearchBar";
import SimpleTable from "@/components/tables/SimpleTable";

export default function DashboardPage() {
  const data = [
    { patente: "ABCJ11", cliente: "Juan Soto", estado: "En reparación", ingreso: "2025-11-10" },
    { patente: "KJHG22", cliente: "María Díaz", estado: "Diagnóstico", ingreso: "2025-11-11" },
  ];

  return (
    <section className="space-y-6">
      <DashboardCards />
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Vehículos en taller</h2>
        <SearchBar placeholder="Buscar por patente / cliente" />
      </div>
      <SimpleTable
        columns={[
          { key: "patente", header: "Patente" },
          { key: "cliente", header: "Cliente" },
          { key: "estado", header: "Estado" },
          { key: "ingreso", header: "Ingreso" },
        ]}
        rows={data}
        emptyMessage="No hay vehículos actualmente."
      />
    </section>
  );
}
