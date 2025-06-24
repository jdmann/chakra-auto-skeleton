"use strict";
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
  Skeletize: () => Skeletize
});
module.exports = __toCommonJS(src_exports);

// src/components/Skeletize.tsx
var import_react = require("@chakra-ui/react");
var import_react2 = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var getSkeletonProps = (props, excludeSize = true, excludeDimensions = false) => {
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
  const propsToExclude = ["colorScheme", "variant", "onClick"];
  if (excludeSize) {
    propsToExclude.push("size");
  }
  if (excludeDimensions) {
    propsToExclude.push("height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth");
  }
  const cleanProps = { ...skeletonProps };
  propsToExclude.forEach((prop) => {
    delete cleanProps[prop];
  });
  return cleanProps;
};
var getComponentName = (child) => {
  if (typeof child.type === "string")
    return child.type;
  const componentType = child.type;
  if (componentType && componentType.displayName) {
    return componentType.displayName;
  }
  if (componentType && componentType.name) {
    return componentType.name;
  }
  if (componentType && componentType.render) {
    const renderFn = componentType.render;
    if (renderFn && renderFn.displayName)
      return renderFn.displayName;
    if (renderFn && renderFn.name)
      return renderFn.name;
  }
  if (componentType && componentType.type) {
    const innerType = componentType.type;
    if (innerType && innerType.displayName)
      return innerType.displayName;
    if (innerType && innerType.name)
      return innerType.name;
  }
  const typeStr = (componentType == null ? void 0 : componentType.toString()) || "";
  const match = typeStr.match(/function\s+([A-Za-z][A-Za-z0-9]*)/);
  if (match)
    return match[1];
  return "";
};
var isAvatarLikeComponent = (child, name) => {
  if (["Avatar", "ChakraAvatar", "AvatarRoot", "Avatar.Root"].includes(name))
    return true;
  const hasAvatarProps = !!(child.props.src || child.props.name || child.props.alt || child.props.fallback);
  const isCircular = child.props.borderRadius === "full" && child.props.w === child.props.h;
  const hasAvatarSize = child.props.size && typeof child.props.size === "string" && ["xs", "sm", "md", "lg", "xl", "2xl"].includes(child.props.size);
  return hasAvatarProps || isCircular && hasAvatarSize;
};
var isLayoutComponent = (name) => ["Box", "Stack", "Flex", "Grid", "Container", "Wrap", "Center"].includes(name);
var isTextLikeComponent = (child, name) => {
  if (["Text", "Heading", "text", "heading", "ChakraText", "ChakraHeading"].includes(name))
    return true;
  const textProps = ["fontSize", "fontWeight", "color", "textAlign", "lineHeight", "fontFamily"];
  const hasTextProps = textProps.some((prop) => child.props[prop] !== void 0);
  const hasOnlyTextContent = typeof child.props.children === "string";
  const hasTextStyling = !!(child.props.fontSize || child.props.fontWeight || child.props.color || child.props.textAlign || child.props.lineHeight || child.props.fontFamily || child.props.size);
  const hasTextOrSpacingProps = !!(hasTextStyling || child.props.mb || child.props.mt || child.props.mx || child.props.my || child.props.margin || child.props.marginBottom || child.props.marginTop);
  return hasTextProps || hasOnlyTextContent && hasTextOrSpacingProps;
};
var isButtonLikeComponent = (child, name) => {
  if (name === "Button")
    return true;
  if (["ChakraButton", "button"].includes(name))
    return true;
  return !!(child.props.onClick || child.props.colorScheme || child.props.variant || child.props.type === "button" || child.props.type === "submit" || child.props.disabled !== void 0 || child.props.isDisabled !== void 0 || child.props.isLoading !== void 0 || // Only consider size for buttons if it's combined with other button indicators
  child.props.size && (child.props.colorScheme || child.props.variant || child.props.onClick));
};
var isLayoutLikeComponent = (child, name) => {
  if (isLayoutComponent(name))
    return true;
  const layoutProps = ["display", "flexDirection", "alignItems", "justifyContent", "gap"];
  return layoutProps.some((prop) => child.props[prop] !== void 0);
};
var Skeletize = ({ loading, mode = "auto", children }) => {
  if (!loading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
  const renderSkeletonForChild = (child) => {
    var _a, _b;
    const name = getComponentName(child);
    if (mode === "manual") {
      if (child.props["data-skeleton"]) {
        if (isButtonLikeComponent(child, name)) {
          const MeasuredSkeletonButton = () => {
            const [dimensions, setDimensions] = (0, import_react2.useState)(null);
            const measureRef = (0, import_react2.useRef)(null);
            (0, import_react2.useEffect)(() => {
              if (measureRef.current) {
                const rect = measureRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
              }
            }, []);
            const buttonProps = { ...child.props };
            delete buttonProps.onClick;
            delete buttonProps.onMouseEnter;
            delete buttonProps.onMouseLeave;
            delete buttonProps.onFocus;
            delete buttonProps.onBlur;
            delete buttonProps.type;
            delete buttonProps["data-skeleton"];
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Box, { position: "relative", display: "inline-block", children: [
              (0, import_react2.cloneElement)(child, {
                ...buttonProps,
                ref: measureRef,
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                zIndex: -1
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react.Skeleton,
                {
                  width: dimensions ? `${dimensions.width}px` : "auto",
                  height: dimensions ? `${dimensions.height}px` : "auto",
                  minWidth: dimensions ? `${dimensions.width}px` : "120px",
                  minHeight: dimensions ? `${dimensions.height}px` : "40px",
                  borderRadius: "md",
                  display: "inline-block"
                }
              )
            ] });
          };
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeasuredSkeletonButton, {});
        }
        if (isTextLikeComponent(child, name)) {
          const props2 = getSkeletonProps(child.props, false);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonText, { noOfLines: 1, ...props2 });
        }
        if (isAvatarLikeComponent(child, name)) {
          const props2 = getSkeletonProps(child.props, true);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonCircle, { size: child.props.size || child.props.boxSize || "40px", ...props2 });
        }
        const props = getSkeletonProps(child.props, true);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props });
      }
      if (isLayoutLikeComponent(child, name) && ((_a = child.props) == null ? void 0 : _a.children)) {
        return (0, import_react2.cloneElement)(child, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeletize, { loading: true, mode: "manual", children: child.props.children })
        });
      }
      return child;
    }
    if (isButtonLikeComponent(child, name)) {
      const MeasuredSkeletonButton = () => {
        const [dimensions, setDimensions] = import_react2.default.useState(null);
        const measureRef = import_react2.default.useRef(null);
        import_react2.default.useEffect(() => {
          if (measureRef.current) {
            const rect = measureRef.current.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
          }
        }, []);
        const buttonProps = { ...child.props };
        delete buttonProps.onClick;
        delete buttonProps.onMouseEnter;
        delete buttonProps.onMouseLeave;
        delete buttonProps.onFocus;
        delete buttonProps.onBlur;
        delete buttonProps.type;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Box, { position: "relative", display: "inline-block", children: [
          (0, import_react2.cloneElement)(child, {
            ...buttonProps,
            ref: measureRef,
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            zIndex: -1
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Skeleton,
            {
              width: dimensions ? `${dimensions.width}px` : "auto",
              height: dimensions ? `${dimensions.height}px` : "auto",
              minWidth: dimensions ? `${dimensions.width}px` : "120px",
              minHeight: dimensions ? `${dimensions.height}px` : "40px",
              borderRadius: "md",
              display: "inline-block"
            }
          )
        ] });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeasuredSkeletonButton, {});
    }
    if (isTextLikeComponent(child, name)) {
      const props = getSkeletonProps(child.props, false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonText, { noOfLines: 1, ...props });
    }
    if (isAvatarLikeComponent(child, name)) {
      const props = getSkeletonProps(child.props, true);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonCircle, { size: child.props.size || child.props.boxSize || "40px", ...props });
    }
    if (name === "Image") {
      const props = getSkeletonProps(child.props, true);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props, height: child.props.height || "200px" });
    }
    if (!name || name === "") {
      if (typeof child.props.children === "string" && (child.props.fontSize || child.props.fontWeight || child.props.color)) {
        const props = getSkeletonProps(child.props, false);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.SkeletonText, { noOfLines: 1, ...props });
      }
      if (child.props.onClick || child.props.colorScheme || child.props.variant) {
        const props = getSkeletonProps(child.props, true);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { minH: "40px", minHeight: "40px", h: "40px", flexShrink: 0, flex: "0 0 auto", display: "block", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props, height: "40px", width: "120px" }) });
      }
    }
    if (isLayoutLikeComponent(child, name) && ((_b = child.props) == null ? void 0 : _b.children)) {
      return (0, import_react2.cloneElement)(child, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeletize, { loading: true, mode: "auto", children: child.props.children })
      });
    }
    const defaultProps = getSkeletonProps(child.props, true);
    if (defaultProps.height || defaultProps.width || child.props["data-skeleton"]) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...defaultProps });
    }
    if (typeof child.props.children === "string") {
      const content = child.props.children.toLowerCase();
      const buttonKeywords = [
        "click",
        "submit",
        "save",
        "cancel",
        "ok",
        "yes",
        "no",
        "button",
        "btn"
      ];
      if (buttonKeywords.some((keyword) => content.includes(keyword))) {
        const props = getSkeletonProps(child.props, true);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { minH: "40px", minHeight: "40px", h: "40px", flexShrink: 0, flex: "0 0 auto", display: "block", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { ...props, height: "40px", width: "120px" }) });
      }
    }
    return child;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: import_react2.Children.map(children, (child) => {
    if (!(0, import_react2.isValidElement)(child))
      return child;
    return renderSkeletonForChild(child);
  }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Skeletize
});
//# sourceMappingURL=index.js.map