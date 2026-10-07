"use client";

import { useEffect, useState } from "react";

export function BackendHealth({ apiUrl, timeoutMs = 5000 }: { apiUrl: string; timeoutMs?: number }) {
  const [status, setStatus] = useState("Verificando backend");

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
      setStatus("Backend indisponível");
    }, timeoutMs);
    fetch(`${apiUrl.replace(/\/$/, "")}/health`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok || data?.status !== "ok") throw new Error("Unavailable");
        if (!controller.signal.aborted) setStatus("Backend disponível");
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("Backend indisponível");
      })
      .finally(() => clearTimeout(timer));

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [apiUrl, timeoutMs]);

  return <p role="status">{status}</p>;
}