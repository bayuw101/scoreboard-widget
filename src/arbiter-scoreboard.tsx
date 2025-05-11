import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";
import "./index.css";
import Scoreboard from "./Scoreboard.tsx";
import type { optionsType } from "./types/index.ts";
import { defaultOptions } from "./lib/options.ts";

const roots: Record<string, Root> = {}; // Store root instances by target ID

function init(config?: { target?: string; options?: optionsType }) {
  if (!config) {
    config = {};
  }

  if(!config.options){
    config.options = {};
  }

  config.options = { ...defaultOptions, ...config.options };

  if (!config.target) {
    config.target = "#arbiter-scoreboard";
  }

  const { target, options } = config;

  if (!target.startsWith("#")) {
    throw new Error("Arbiter Scoreboard : Target must start with '#' to indicate an ID.");
  }

  const targetId = target.slice(1);
  const rootElement = document.getElementById(targetId);

  if (!rootElement) {
    throw new Error(
      `Arbiter Scoreboard : Element with id '${target}' not found. Check your index.html file.`
    );
  }

  // Check if a root already exists for this container
  if (!roots[targetId]) {
    // Create a new root if it doesn't exist
    roots[targetId] = createRoot(rootElement);
  }

  // Use the existing root to render the component
  roots[targetId].render(
    <StrictMode>
      <Scoreboard options={options} />
    </StrictMode>
  );
}

function destroy(target?: string) {
  if(!target) {
    // If no target is provided, destroy all initialized scoreboards
    for (const id in roots) {
      const root = roots[id];
      root.unmount();
      delete roots[id];
    }
    return;
  }

  if (!target.startsWith("#")) {
    throw new Error("Arbiter Scoreboard : Target must start with '#' to indicate an ID.");
  }

  const targetId = target.slice(1);
  const root = roots[targetId];

  if (!root) {
    throw new Error(`Arbiter Scoreboard : No initialized scoreboard found for target '${target}'.`);
  }

  // Unmount the React component and clean up the root
  root.unmount();
  delete roots[targetId];
}

if (typeof window !== "undefined") {
  (window as any).ArbiterScoreboard = { init, destroy };
  // Optional: You can also add a method to destroy all instances
}