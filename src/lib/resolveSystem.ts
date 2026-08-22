import { CONTENT } from "@data/config";

import type { ContentSystem } from "./types";

/**
 * Resolve a content system by ID, with proper error handling.
 * Defaults to "docs" if no collectionId is provided.
 *
 * @param collectionId - The system ID to resolve (optional, defaults to "docs")
 * @returns The resolved ContentSystem
 * @throws Error if the system is not found
 */
export function resolveSystem(collectionId?: string): ContentSystem {
  const key = collectionId ?? "docs";
  const system = CONTENT.systems.find((s) => s.id === key);

  if (!system) {
    throw new Error(`Content system not found: ${key}`);
  }

  return system;
}

/**
 * Get the base route for a content system including Astro's BASE_URL.
 *
 * @param collectionId - The system ID (optional, defaults to "docs")
 * @returns The full base route for the system (e.g., "/datahub/docs", "/datahub/proyectos")
 */
export function getSystemRoute(collectionId?: string): string {
  const system = resolveSystem(collectionId);
  const route = system.route ?? `/${system.id}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${route}`;
}
