import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { makeServer } from "./services/server";
import AppRoutes from "./AppRoutes.tsx";
import { FilterProvider } from "./contexts/FilterContext.tsx";

// Initialize MirageJS server for both development and production
// This is needed because we're using mock data for the demo
makeServer({ environment: import.meta.env.DEV ? "development" : "production" });

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <AppRoutes />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 2000,
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </FilterProvider>
    </QueryClientProvider>
  </StrictMode>
);
