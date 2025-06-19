// src/components/Skeletize.tsx
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Children, cloneElement, isValidElement } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx(Fragment, { children });
  const renderSkeletonForChild = (child) => {
    var _a, _b;
    const name = getComponentName(child);
    const allProps = getSkeletonProps(child.props);
    const isButton = isButtonLikeComponent(child, name);
    const props = isButton ? { ...allProps, height: void 0, width: void 0 } : allProps;
    if (typeof child.props.children === "string") {
    }
    if (mode === "manual") {
      if (child.props["data-skeleton"]) {
        if (isButtonLikeComponent(child, name)) {
          const buttonSize = child.props.size || "md";
          const buttonDimensions = {
            xs: { height: "24px", width: "80px" },
            sm: { height: "32px", width: "96px" },
            md: { height: "40px", width: "120px" },
            lg: { height: "48px", width: "140px" },
            xl: { height: "56px", width: "160px" }
          };
          const dimensions = buttonDimensions[buttonSize] || buttonDimensions.md;
          const height = child.props.height || dimensions.height;
          const width = child.props.width || dimensions.width;
          const cleanProps = { ...props };
          delete cleanProps.height;
          delete cleanProps.width;
          return /* @__PURE__ */ jsx(Skeleton, { ...cleanProps, height, width });
        }
        if (isTextLikeComponent(child, name)) {
          return /* @__PURE__ */ jsx(SkeletonText, { noOfLines: 1, ...props });
        }
        if (isAvatarLikeComponent(child, name)) {
          return /* @__PURE__ */ jsx(SkeletonCircle, { size: child.props.size || child.props.boxSize || "40px", ...props });
        }
        return /* @__PURE__ */ jsx(Skeleton, { ...props });
      }
      if (isLayoutLikeComponent(child, name) && ((_a = child.props) == null ? void 0 : _a.children)) {
        return cloneElement(child, {
          children: /* @__PURE__ */ jsx(Skeletize, { loading: true, mode: "manual", children: child.props.children })
        });
      }
      return child;
    }
    if (isButtonLikeComponent(child, name)) {
      const buttonSize = child.props.size || "md";
      const buttonDimensions = {
        xs: { height: "24px", width: "80px" },
        sm: { height: "32px", width: "96px" },
        md: { height: "40px", width: "120px" },
        lg: { height: "48px", width: "140px" },
        xl: { height: "56px", width: "160px" }
      };
      const dimensions = buttonDimensions[buttonSize] || buttonDimensions.md;
      const height = child.props.height || dimensions.height;
      const width = child.props.width || dimensions.width;
      return /* @__PURE__ */ jsx(Skeleton, { ...props, height, width });
    }
    if (isTextLikeComponent(child, name)) {
      return /* @__PURE__ */ jsx(SkeletonText, { noOfLines: 1, ...props });
    }
    if (isAvatarLikeComponent(child, name)) {
      return /* @__PURE__ */ jsx(SkeletonCircle, { size: child.props.size || child.props.boxSize || "40px", ...props });
    }
    if (name === "Image") {
      return /* @__PURE__ */ jsx(Skeleton, { ...props, height: child.props.height || "200px" });
    }
    if (!name || name === "") {
      if (typeof child.props.children === "string" && (child.props.fontSize || child.props.fontWeight || child.props.color)) {
        return /* @__PURE__ */ jsx(SkeletonText, { noOfLines: 1, ...props });
      }
      if (child.props.onClick || child.props.colorScheme || child.props.variant) {
        return /* @__PURE__ */ jsx(Skeleton, { ...props, height: "40px", width: "120px" });
      }
    }
    if (isLayoutLikeComponent(child, name) && ((_b = child.props) == null ? void 0 : _b.children)) {
      return cloneElement(child, {
        children: /* @__PURE__ */ jsx(Skeletize, { loading: true, mode: "auto", children: child.props.children })
      });
    }
    if (props.height || props.width || child.props["data-skeleton"]) {
      return /* @__PURE__ */ jsx(Skeleton, { ...props });
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
        return /* @__PURE__ */ jsx(Skeleton, { ...props, height: "40px", width: "120px" });
      }
    }
    return child;
  };
  return /* @__PURE__ */ jsx(Fragment, { children: Children.map(children, (child) => {
    if (!isValidElement(child))
      return child;
    return renderSkeletonForChild(child);
  }) });
};
export {
  Skeletize
};
//# sourceMappingURL=index.mjs.map