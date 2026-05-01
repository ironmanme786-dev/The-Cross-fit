import { App } from "./App";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </main>
  );
}
