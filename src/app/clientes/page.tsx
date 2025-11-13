import SearchBar from "@/components/common/SearchBar";
import SimpleTable from "@/components/tables/SimpleTable";

export default function ClientesPage() {
  const rows = [
    { nombre: "Juan Soto", email: "juan@correo.cl", telefono: "+56 9 1111 1111" },
    { nombre: "María Díaz", email: "maria@correo.cl", telefono: "+56 9 2222 2222" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Clientes</h2>
        <button className="rounded-md bg-black px-3 py-1.5 text-sm text-white hover:bg-neutral-800">
          + Nuevo
        </button>
      </div>
      <SearchBar placeholder="Buscar cliente" />
      <SimpleTable
        columns={[
          { key: "nombre", header: "Nombre" },
          { key: "email", header: "Email" },
          { key: "telefono", header: "Teléfono" },
        ]}
        rows={rows}
        emptyMessage="Sin clientes."
      />
    </section>
  );
}
