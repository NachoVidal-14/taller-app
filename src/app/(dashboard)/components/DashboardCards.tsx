import KPICard from "@/components/common/KPICard";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <KPICard label="Vehículos en taller" value="3" />
      <KPICard label="OT pendientes" value="5" />
      <KPICard label="Cotizaciones por enviar" value="2" />
      <KPICard label="Entregas hoy" value="1" />
    </div>
  );
}
