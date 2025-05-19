import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";
import "./index.css";
import Scoreboard from "./Scoreboard.tsx"
// import Scoreboard from "./components/Scoreboard";
import type { OptionsType, ParameterType } from "./types/index.ts";
import { defaultOptions } from "./lib/options.ts";
import { showErrorToast } from "./utils/toastUtils.ts";
import { isParameterType } from "./utils/typeValidators.ts"

const roots: Record<string, Root> = {};

function init(config?: {
  target?: string;
  token?: string;
  options?: OptionsType;
  data?: ParameterType;
}) {
  if (!config) {
    config = {};
  }

  if (!config.token) {
    showErrorToast(
      "Arbiter Scoreboard : Token is required. Please provide a valid token."
    );
    return;
  }

  if (!config.options) {
    config.options = {};
  }

  config.options = { ...defaultOptions, ...config.options };

  if (!config.target) {
    config.target = "#arbiter-scoreboard";
  }

  const { target, options } = config;

  if (!target.startsWith("#")) {
    showErrorToast(
      "Arbiter Scoreboard : Target must start with '#' to indicate an ID."
    );
    return;
  }

  if (!config.data) {
    config.data = {};
  }

  const targetId = target.slice(1);
  const rootElement = document.getElementById(targetId);

  if (!rootElement) {
    showErrorToast(
      `Arbiter Scoreboard : Element with id '${target}' not found. Check your file.`
    );
    return;
  }

  if (!roots[targetId]) {
    roots[targetId] = createRoot(rootElement);
  }

  if (!isParameterType(config.data)) {
    showErrorToast(
      "Arbiter Scoreboard : Provided data is not compatible with the expected ParameterType."
    );
    return;
  }

  const itemHeight = options.location ? 145  : 125;
  const rootWidth = rootElement.offsetWidth || window.innerWidth;
  const rootHeight = (rootElement.offsetHeight > itemHeight ? rootElement.offsetHeight : itemHeight) || window.innerHeight;
  
  if (options.vertical) {
    if (options.header === "left") {
      options.header = "top";
    } else if (options.header === "right") {
      options.header = "bottom";
    }
  }


  if(options.theme === "dark"){
    options.backgroundColor = options.primaryColor;
    // options.secondaryColor = options.thirdColor;
  }

  if(options.header === false){
    
    if(options.theme === "dark"){
      options.backgroundColor = options.secondaryColor;
      // options.secondaryColor = options.thirdColor;
    }
    options.secondaryColor = options.primaryColor;
  }

  roots[targetId].render(
    <StrictMode>
      <Scoreboard
        options={options}
        token={config.token}
        parameters={config.data}
        rootWidth={rootWidth}
        rootHeight={rootHeight}
        itemHeight={itemHeight}
      />
    </StrictMode>
  );
}

function destroy(target?: string) {
  if (!target) {
    for (const id in roots) {
      const root = roots[id];
      root.unmount();
      delete roots[id];
    }
    return;
  }

  if (!target.startsWith("#")) {
    throw new Error(
      "Arbiter Scoreboard : Target must start with '#' to indicate an ID."
    );
  }

  const targetId = target.slice(1);
  const root = roots[targetId];

  if (!root) {
    throw new Error(
      `Arbiter Scoreboard : No initialized scoreboard found for target '${target}'.`
    );
  }
  root.unmount();
  delete roots[targetId];
}

if (typeof window !== "undefined") {
  (window as any).ArbiterScoreboard = { init, destroy };
}
