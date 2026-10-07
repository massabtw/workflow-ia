import { BackendHealth } from "@/components/backend-health";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6">
      <h1 className="text-4xl font-semibold tracking-tight">AI Work OS</h1>
      <p className="text-muted-foreground">Ambiente local — frontend e backend.</p>
      <section aria-label="Saúde da API" className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-medium">Conexão com a API</h2>
        <BackendHealth apiUrl={process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000"} />
      </section>
    </main>
  );
}