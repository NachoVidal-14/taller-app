import SimpleTable from "@/components/tables/SimpleTable";

export default function OTPage() {
  const rows = [
    { numero: "OT-000456", cliente: "Juan Soto", patente: "ABCJ11", estado: "En reparación" },
    { numero: "OT-000457", cliente: "María Díaz", patente: "KJHG22", estado: "Diagnóstico" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Órdenes de Trabajo</h2>
        <button className="rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-neutral-800">
          + Nueva
        </button>
      </div>
      <SimpleTable
        columns={[
          { key: "numero", header: "N°" },
          { key: "cliente", header: "Cliente" },
          { key: "patente", header: "Patente" },
          { key: "estado", header: "Estado" },
        ]}
        rows={rows}
        emptyMessage="Sin órdenes de trabajo."
      />
    </section>
  );
}
