import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { makeServer } from "./services/server";
import AppRoutes from "./AppRoutes.tsx";
import { FilterProvider } from "./contexts/FilterContext.tsx";

if (import.meta.env.DEV) {
  makeServer({ environment: "development" });
}

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <AppRoutes />
      </FilterProvider>
    </QueryClientProvider>
  </StrictMode>
);
