// src/components/AutoSkeleton.tsx
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText
} from "@chakra-ui/react";
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
  return child.type.displayName || child.type.name || "";
};
var isLayoutComponent = (name) => ["Box", "Stack", "Flex", "Grid", "Container", "Wrap", "Center"].includes(name);
var AutoSkeleton = ({
  loading,
  mode = "auto",
  children
}) => {
  if (!loading)
    return /* @__PURE__ */ jsx(Fragment, { children });
  const renderSkeletonForChild = (child) => {
    var _a, _b;
    const name = getComponentName(child);
    const props = getSkeletonProps(child.props);
    if (mode === "manual") {
      if (child.props["data-skeleton"]) {
        return /* @__PURE__ */ jsx(Skeleton, { ...props });
      }
      if (isLayoutComponent(name) && ((_a = child.props) == null ? void 0 : _a.children)) {
        return cloneElement(child, {
          children: /* @__PURE__ */ jsx(AutoSkeleton, { loading: true, mode: "manual", children: child.props.children })
        });
      }
      return child;
    }
    switch (name) {
      case "Text":
      case "Heading":
        return /* @__PURE__ */ jsx(SkeletonText, { noOfLines: 1, spacing: "4", skeletonHeight: "1em", ...props });
      case "Avatar":
        return /* @__PURE__ */ jsx(SkeletonCircle, { size: child.props.boxSize || "40px", ...props });
      case "Image":
      case "Button":
        return /* @__PURE__ */ jsx(Skeleton, { ...props, height: child.props.height || "40px" });
      default:
        if (isLayoutComponent(name) && ((_b = child.props) == null ? void 0 : _b.children)) {
          return cloneElement(child, {
            children: /* @__PURE__ */ jsx(AutoSkeleton, { loading: true, mode: "auto", children: child.props.children })
          });
        }
        if (props.height || props.width || child.props["data-skeleton"]) {
          return /* @__PURE__ */ jsx(Skeleton, { ...props });
        }
        return child;
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: Children.map(children, (child) => {
    if (!isValidElement(child))
      return child;
    return renderSkeletonForChild(child);
  }) });
};
export {
  AutoSkeleton
};
//# sourceMappingURL=index.mjs.map