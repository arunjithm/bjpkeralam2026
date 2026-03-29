"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import * as duckdb from '@duckdb/duckdb-wasm';

interface DuckDBContextType {
  db: duckdb.AsyncDuckDB | null;
  loading: boolean;
  query: (sql: string) => Promise<Record<string, unknown>[]>;
}

const DuckDBContext = createContext<DuckDBContextType>({
  db: null,
  loading: true,
  query: async () => [],
});

export const useDuckDB = () => useContext(DuckDBContext);

const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
  mvp: {
    mainModule: 'https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.2.8/dist/duckdb-mvp.wasm',
    mainWorker: 'https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.2.8/dist/duckdb-browser-mvp.worker.js',
  },
  eh: {
    mainModule: 'https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.2.8/dist/duckdb-eh.wasm',
    mainWorker: 'https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.2.8/dist/duckdb-browser-eh.worker.js',
  },
};

export function DuckDBProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<duckdb.AsyncDuckDB | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initDB() {
      try {
        // Select matching bundle
        const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
        
        // Instantiate worker
        const worker_url = URL.createObjectURL(
          new Blob([`importScripts("${bundle.mainWorker}");`], { type: 'text/javascript' })
        );
        const worker = new Worker(worker_url);
        const logger = new duckdb.ConsoleLogger();
        
        // Instantiate db
        const database = new duckdb.AsyncDuckDB(logger, worker);
        await database.instantiate(bundle.mainModule, bundle.pthreadWorker);
        
        // Mount the parquet file from the public folder
        const parquetUrl = '/data/vault/kerala_elections.parquet';
        
        // Register file URL to DuckDB
        // For browser, we can just fetch it as an array buffer and register it
        const res = await fetch(parquetUrl);
        const buffer = await res.arrayBuffer();
        await database.registerFileBuffer('kerala_elections.parquet', new Uint8Array(buffer));
        
        // Create a view for easy querying
        const conn = await database.connect();
        await conn.query(`CREATE VIEW elections AS SELECT * FROM read_parquet('kerala_elections.parquet');`);
        await conn.close();

        setDb(database);
      } catch (e) {
        console.error("Failed to initialize DuckDB", e);
      } finally {
        setLoading(false);
      }
    }
    
    initDB();
  }, []);

  const executeQuery = async (sql: string): Promise<Record<string, unknown>[]> => {
    if (!db) return [];
    try {
      const conn = await db.connect();
      const result = await conn.query(sql);
      await conn.close();
      const rows = result.toArray().map((r: { toJSON: () => Record<string, unknown> }) => r.toJSON());
      return rows;
    } catch (e) {
      console.error("Query failed", e);
      return [];
    }
  };

  return (
    <DuckDBContext.Provider value={{ db, loading, query: executeQuery }}>
      {children}
    </DuckDBContext.Provider>
  );
}
