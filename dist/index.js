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
  AutoSkeleton: () => AutoSkeleton
});
module.exports = __toCommonJS(src_exports);

// src/components/AutoSkeleton.tsx
var import_react = require("@chakra-ui/react");
var import_react2 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var getSkeletonProps = (props) => {
  const allowed = [
    "height",
    "width",
    "minHeight",
    "minWidth",
    "maxHeight",
    "maxWidth",
    "borderRadius",
    "startColor",
    "endColor",
    "m",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "pt",
    "pb",
    "pl",
    "pr",
    "margin",
    "padding"
  ];
  const skeletonProps = {};
  for (const key of allowed) {
    if (props[key] !== void 0) {
      skeletonProps[key] = props[key];
    }
  }
  return skeletonProps;
};
var getComponentName = (child) => {
  if (typeof child.type === "string")
    return child.type;
  return child.type.displayName || child.type.name || "";
};
var isLayoutComponent = (name) => ["Box", "Stack", "Flex", "Grid", "Container", "Wrap", "Center"].includes(name);
var AutoSkeleton = ({
  loading,
  mode = "auto",
  children
}) => {
  if (!loading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
  const renderSkeletonForChild = (child) => {
    var _a, _b;
    const name = getComponentName(child);
    const props = getSkeletonProps(child.props);
    if (mode === "manual") {
      if (child.props["data-skeleton"]) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props });
      }
      if (isLayoutComponent(name) && ((_a = child.props) == null ? void 0 : _a.children)) {
        return (0, import_react2.cloneElement)(child, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoSkeleton, { loading: true, mode: "manual", children: child.props.children })
        });
      }
      return child;
    }
    switch (name) {
      case "Text":
      case "Heading":
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonText, { noOfLines: 1, spacing: "4", skeletonHeight: "1em", ...props });
      case "Avatar":
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonCircle, { size: child.props.boxSize || "40px", ...props });
      case "Image":
      case "Button":
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props, height: child.props.height || "40px" });
      default:
        if (isLayoutComponent(name) && ((_b = child.props) == null ? void 0 : _b.children)) {
          return (0, import_react2.cloneElement)(child, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoSkeleton, { loading: true, mode: "auto", children: child.props.children })
          });
        }
        if (props.height || props.width || child.props["data-skeleton"]) {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props });
        }
        return child;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: import_react2.Children.map(children, (child) => {
    if (!(0, import_react2.isValidElement)(child))
      return child;
    return renderSkeletonForChild(child);
  }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AutoSkeleton
});
//# sourceMappingURL=index.js.map