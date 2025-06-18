var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AutoSkeleton: () => AutoSkeleton
});
module.exports = __toCommonJS(src_exports);

// src/components/AutoSkeleton.tsx
var import_react = __toESM(require("react"));
var import_react2 = require("@chakra-ui/react");
var import_react3 = require("react");
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
  var _a, _b;
  return ((_a = child.type) == null ? void 0 : _a.displayName) || ((_b = child.type) == null ? void 0 : _b.name) || (typeof child.type === "string" ? child.type : "");
};
var isLayoutComponent = (name) => ["Box", "Stack", "Flex", "Grid", "Container", "Wrap", "Center"].includes(name);
var AutoSkeleton = ({
  loading,
  mode = "auto",
  children
}) => {
  if (!loading)
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
  const renderSkeletonForChild = (child) => {
    var _a, _b;
    const name = getComponentName(child);
    const props = getSkeletonProps(child.props);
    if (mode === "manual") {
      if (child.props["data-skeleton"]) {
        return /* @__PURE__ */ import_react.default.createElement(import_react2.Skeleton, { ...props });
      }
      if (isLayoutComponent(name) && ((_a = child.props) == null ? void 0 : _a.children)) {
        return (0, import_react3.cloneElement)(child, {
          children: /* @__PURE__ */ import_react.default.createElement(AutoSkeleton, { loading: true, mode: "manual" }, child.props.children)
        });
      }
      return child;
    }
    switch (name) {
      case "Text":
      case "Heading":
        return /* @__PURE__ */ import_react.default.createElement(import_react2.SkeletonText, { noOfLines: 1, spacing: "4", skeletonHeight: "1em", ...props });
      case "Avatar":
        return /* @__PURE__ */ import_react.default.createElement(import_react2.SkeletonCircle, { size: child.props.boxSize || "40px", ...props });
      case "Image":
      case "Button":
        return /* @__PURE__ */ import_react.default.createElement(import_react2.Skeleton, { ...props, height: child.props.height || "40px" });
      default:
        if (isLayoutComponent(name) && ((_b = child.props) == null ? void 0 : _b.children)) {
          return (0, import_react3.cloneElement)(child, {
            children: /* @__PURE__ */ import_react.default.createElement(AutoSkeleton, { loading: true, mode: "auto" }, child.props.children)
          });
        }
        if (props.height || props.width || child.props["data-skeleton"]) {
          return /* @__PURE__ */ import_react.default.createElement(import_react2.Skeleton, { ...props });
        }
        return child;
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, import_react3.Children.map(children, (child) => {
    if (!(0, import_react3.isValidElement)(child))
      return child;
    return renderSkeletonForChild(child);
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AutoSkeleton
});
