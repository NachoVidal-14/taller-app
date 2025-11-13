import SimpleTable from "@/components/tables/SimpleTable";

export default function CotizacionesPage() {
  const rows = [
    { numero: "COT-000123", cliente: "Juan Soto", patente: "ABCJ11", total: "$120.000", estado: "Borrador" },
    { numero: "COT-000124", cliente: "María Díaz", patente: "KJHG22", total: "$89.000", estado: "Enviada" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Cotizaciones</h2>
        <button className="rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-neutral-800">
          + Nueva
        </button>
      </div>
      <SimpleTable
        columns={[
          { key: "numero", header: "N°" },
          { key: "cliente", header: "Cliente" },
          { key: "patente", header: "Patente" },
          { key: "total", header: "Total" },
          { key: "estado", header: "Estado" },
        ]}
        rows={rows}
        emptyMessage="Sin cotizaciones."
      />
    </section>
  );
}
