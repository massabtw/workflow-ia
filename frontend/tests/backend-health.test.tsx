import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { BackendHealth } from "../src/components/backend-health";

it("shows loading then confirms backend availability", async () => {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(JSON.stringify({ status: "ok" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }),
  );
  vi.stubGlobal("fetch", fetchMock);

  render(<BackendHealth apiUrl="http://127.0.0.1:8000" />);

  expect(screen.getByRole("status")).toHaveTextContent("Verificando backend");
  expect(await screen.findByText("Backend disponível")).toBeInTheDocument();
  expect(fetchMock).toHaveBeenCalledWith(
    "http://127.0.0.1:8000/health",
    expect.objectContaining({ cache: "no-store" }),
  );
});

it("reports unavailable instead of remaining loading when the request hangs", async () => {
  vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  render(<BackendHealth apiUrl="http://127.0.0.1:8000" timeoutMs={20} />);
  expect(await screen.findByText("Backend indisponível")).toBeInTheDocument();
});

it.each([
  ["network failure", () => Promise.reject(new Error("Connection refused"))],
  ["HTTP error", () => Promise.resolve(new Response("{}", { status: 503 }))],
  ["invalid payload", () => Promise.resolve(new Response('{"status":"broken"}'))],
  ["invalid JSON", () => Promise.resolve(new Response("not json"))],
])("reports unavailable for %s", async (_name, response) => {
  vi.stubGlobal("fetch", vi.fn(response));
  render(<BackendHealth apiUrl="http://127.0.0.1:8000/" />);
  expect(await screen.findByText("Backend indisponível")).toBeInTheDocument();
});