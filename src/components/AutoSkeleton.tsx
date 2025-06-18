import {
    Skeleton,
    SkeletonCircle,
    SkeletonText
} from "@chakra-ui/react";
import React, { Children, cloneElement, isValidElement, ReactElement } from "react";

export type AutoSkeletonProps = {
  loading: boolean;
  mode?: "auto" | "manual";
  children: React.ReactNode;
};

const getSkeletonProps = (props: Record<string, any>) => {
  const allowed = [
    "height", "width", "minHeight", "minWidth",
    "maxHeight", "maxWidth", "borderRadius",
    "startColor", "endColor",
    "m", "mt", "mb", "ml", "mr",
    "p", "pt", "pb", "pl", "pr",
    "margin", "padding",
  ];

  const skeletonProps: Record<string, any> = {};
  for (const key of allowed) {
    if (props[key] !== undefined) {
      skeletonProps[key] = props[key];
    }
  }

  return skeletonProps;
};

const getComponentName = (child: ReactElement): string => {
  if (typeof child.type === "string") return child.type;
  // @ts-expect-error: displayName and name are common on function/class components
  return child.type.displayName || child.type.name || "";
};

const isLayoutComponent = (name: string) =>
  ["Box", "Stack", "Flex", "Grid", "Container", "Wrap", "Center"].includes(name);

export const AutoSkeleton: React.FC<AutoSkeletonProps> = ({
  loading,
  mode = "auto",
  children,
}) => {
  if (!loading) return <>{children}</>;

  const renderSkeletonForChild = (child: ReactElement): React.ReactNode => {
    const name = getComponentName(child);
    const props = getSkeletonProps(child.props);

    if (mode === "manual") {
      if (child.props["data-skeleton"]) {
        return <Skeleton {...props} />;
      }
      if (isLayoutComponent(name) && child.props?.children) {
        return cloneElement(child, {
          children: <AutoSkeleton loading mode="manual">{child.props.children}</AutoSkeleton>,
        });
      }
      return child;
    }

    switch (name) {
      case "Text":
      case "Heading":
        // @ts-expect-error: spacing is a valid prop for SkeletonText in Chakra UI
        return <SkeletonText noOfLines={1} spacing="4" skeletonHeight="1em" {...props} />;
      case "Avatar":
        return <SkeletonCircle size={child.props.boxSize || "40px"} {...props} />;
      case "Image":
      case "Button":
        return <Skeleton {...props} height={child.props.height || "40px"} />;
      default:
        if (isLayoutComponent(name) && child.props?.children) {
          return cloneElement(child, {
            children: <AutoSkeleton loading mode="auto">{child.props.children}</AutoSkeleton>,
          });
        }
        if (props.height || props.width || child.props["data-skeleton"]) {
          return <Skeleton {...props} />;
        }
        return child;
    }
  };

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return renderSkeletonForChild(child);
      })}
    </>
  );
};
