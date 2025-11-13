import { Column, Row } from "./types";

export default function SimpleTable({
  columns,
  rows,
  emptyMessage,
}: {
  columns: Column[];
  rows: Row[];
  emptyMessage?: string;
}) {
  if (!rows?.length) {
    return (
      <div className="rounded-md border bg-white p-6 text-sm text-neutral-600">
        {emptyMessage || "Sin datos."}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-md border bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-neutral-50">
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className={`px-3 py-2 text-left font-medium text-neutral-700 ${
                  c.className || ""
                }`}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              {columns.map((c) => (
                <td key={c.key} className="px-3 py-2 text-neutral-800">
                  {String(r[c.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
