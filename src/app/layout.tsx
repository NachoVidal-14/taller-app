import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import "./globals.css";

export const metadata = {
  title: "Taller Admin",
  description: "Gestión de clientes, vehículos, cotizaciones y órdenes de trabajo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-neutral-50 text-neutral-900"><StackProvider app={stackClientApp}><StackTheme>
        <div className="mx-auto max-w-7xl px-4 py-6">
          <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold">
              Taller Admin
              <span className="ml-2 text-sm font-normal text-neutral-500">
                {process.env.NEXT_PUBLIC_TALLER_NAME}
              </span>
            </h1>
            <nav className="flex flex-wrap gap-3 text-sm">
              <a href="/" className="hover:underline">
                Dashboard
              </a>
              <a href="/clientes" className="hover:underline">
                Clientes
              </a>
              <a href="/vehiculos" className="hover:underline">
                Vehículos
              </a>
              <a href="/cotizaciones" className="hover:underline">
                Cotizaciones
              </a>
              <a href="/ot" className="hover:underline">
                Órdenes de Trabajo
              </a>
            </nav>
          </header>
          {children}
        </div>
      </StackTheme></StackProvider></body>
    </html>
  );
}
