import { useEffect, useState } from "react";
import { getTodayPromises, MicroPromise } from "../lib/promises";

export function usePromises() {
  const [promises, setPromises] = useState<MicroPromise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTodayPromises();
      setPromises(data);
    } catch (err: any) {
      console.error("Failed to load promises", err);
      setError(err.message || "Failed to load promises");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { promises, loading, error, reload: load };
}
