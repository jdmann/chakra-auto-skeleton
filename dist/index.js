"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Skeletize: () => Skeletize,
  useSkeletize: () => useSkeletize
});
module.exports = __toCommonJS(src_exports);

// src/components/Skeletize.tsx
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
function Skeletize({
  loading,
  children,
  className = "",
  skeletonClassName = "skeletize-loading"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { className: `${className} ${loading ? skeletonClassName : ""}`.trim(), position: "relative", children });
}

// src/components/useSkeletize.ts
var import_react2 = require("react");
function useSkeletize(ref, loading, options = {}) {
  (0, import_react2.useLayoutEffect)(() => {
    if (!loading || !ref.current)
      return;
    const {
      mode = "auto",
      manualSelector = "[data-skeleton]",
      variant = "fade",
      skeletonColor = "#e2e8f0",
      // Chakra default: gray.200
      skeletonEndColor = "#f8fafc"
      // Chakra default: gray.50
    } = options;
    const allNodes = ref.current.querySelectorAll("*");
    const classSet = /* @__PURE__ */ new Set();
    allNodes.forEach((el) => {
      el.classList.forEach((cls) => classSet.add(cls));
    });
    console.log("[Skeletize] Classes found in subtree:", Array.from(classSet));
    let elements = [];
    if (mode === "manual") {
      elements = Array.from(ref.current.querySelectorAll(manualSelector));
    } else {
      const autoElements = Array.from(
        ref.current.querySelectorAll(
          '[class*="chakra-"]:not(.chakra-stack), p, h1, h2, h3, h4, h5, h6'
        )
      );
      const manualElements = Array.from(ref.current.querySelectorAll(manualSelector));
      const seen = /* @__PURE__ */ new Set();
      elements = [...autoElements, ...manualElements].filter((el) => {
        if (seen.has(el))
          return false;
        seen.add(el);
        return true;
      });
    }
    let background = "";
    let animation = "";
    switch (variant) {
      case "fade":
        background = skeletonColor;
        animation = "skeletize-fade 1.2s ease-in-out infinite";
        break;
      case "static":
        background = skeletonColor;
        animation = "";
        break;
      case "none":
        background = "";
        animation = "";
        break;
      case "pulse":
      default:
        background = `linear-gradient(90deg,${skeletonColor} 25%,${skeletonEndColor} 50%,${skeletonColor} 75%)`;
        animation = "skeletize-pulse 1.2s ease-in-out infinite";
        break;
    }
    elements.forEach((el) => {
      const htmlEl = el;
      htmlEl.dataset._skeletizeOriginal = htmlEl.getAttribute("style") || "";
      const computedRadius = window.getComputedStyle(htmlEl).borderRadius;
      if (background)
        htmlEl.style.background = background;
      htmlEl.style.color = "transparent";
      htmlEl.style.borderRadius = computedRadius;
      htmlEl.style.pointerEvents = "none";
      htmlEl.style.animation = animation;
      const tag = htmlEl.tagName.toLowerCase();
      const isTextLike = tag === "p" || tag === "span" || tag === "label" || htmlEl.className.includes("chakra-text");
      if (isTextLike) {
        const computedFontSize = parseFloat(window.getComputedStyle(htmlEl).fontSize);
        const elHeight = htmlEl.offsetHeight || computedFontSize * 1.5;
        const barHeight = computedFontSize * 1.15;
        const percent = barHeight / elHeight * 100;
        const top = (100 - percent) / 2;
        const bottom = top + percent;
        let skeletonBar;
        if (variant === "pulse" || variant === "fade") {
          skeletonBar = `linear-gradient(180deg, transparent 0%, transparent ${top}%, ${skeletonColor} ${top}%, ${skeletonColor} ${bottom}%, transparent ${bottom}%, transparent 100%)`;
        } else {
          skeletonBar = `linear-gradient(180deg, transparent 0%, transparent ${top}%, ${skeletonColor} ${top}%, ${skeletonColor} ${bottom}%, transparent ${bottom}%, transparent 100%)`;
        }
        htmlEl.style.background = skeletonBar;
        htmlEl.style.backgroundRepeat = "no-repeat";
        htmlEl.style.backgroundSize = "100% 100%";
        htmlEl.style.borderRadius = computedRadius;
      }
    });
    if (!document.getElementById("skeletize-keyframes")) {
      const style = document.createElement("style");
      style.id = "skeletize-keyframes";
      style.innerHTML = `
        @keyframes skeletize-pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        @keyframes skeletize-fade {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      elements.forEach((el) => {
        const htmlEl = el;
        htmlEl.setAttribute("style", htmlEl.dataset._skeletizeOriginal || "");
        delete htmlEl.dataset._skeletizeOriginal;
      });
    };
  }, [loading, ref, options]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Skeletize,
  useSkeletize
});
//# sourceMappingURL=index.js.map