import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React, { Children, cloneElement, isValidElement, ReactElement } from 'react';

export type SkeletizeProps = {
  loading: boolean;
  mode?: 'auto' | 'manual';
  children: React.ReactNode;
};

const getSkeletonProps = (props: Record<string, any>) => {
  const allowed = [
    'height',
    'width',
    'minHeight',
    'minWidth',
    'maxHeight',
    'maxWidth',
    'borderRadius',
    'startColor',
    'endColor',
    'm',
    'mt',
    'mb',
    'ml',
    'mr',
    'p',
    'pt',
    'pb',
    'pl',
    'pr',
    'margin',
    'padding',
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
  if (typeof child.type === 'string') return child.type;

  const componentType = child.type as any;

  // Check for displayName first
  if (componentType && componentType.displayName) {
    return componentType.displayName;
  }

  // Check for function name
  if (componentType && componentType.name) {
    return componentType.name;
  }

  // For forwardRef components, check the render function name
  if (componentType && componentType.render) {
    const renderFn = componentType.render;
    if (renderFn && renderFn.displayName) return renderFn.displayName;
    if (renderFn && renderFn.name) return renderFn.name;
  }

  // Check for $$typeof and other React internals (forwardRef, memo, etc.)
  if (componentType && componentType.type) {
    const innerType = componentType.type;
    if (innerType && innerType.displayName) return innerType.displayName;
    if (innerType && innerType.name) return innerType.name;
  }

  // Fallback to string representation and try to extract component name
  const typeStr = componentType?.toString() || '';
  const match = typeStr.match(/function\s+([A-Za-z][A-Za-z0-9]*)/);
  if (match) return match[1];

  return '';
};

const isAvatarLikeComponent = (child: ReactElement, name: string): boolean => {
  // Check component name for Avatar patterns
  if (['Avatar', 'ChakraAvatar', 'AvatarRoot', 'Avatar.Root'].includes(name)) return true;

  // Check for avatar-like props (common in real Avatar components)
  const hasAvatarProps = !!(
    child.props.src ||
    child.props.name ||
    child.props.alt ||
    child.props.fallback
  );

  // Check for circular appearance (borderRadius="full" with equal width/height)
  const isCircular = child.props.borderRadius === 'full' && child.props.w === child.props.h;

  // Check for common avatar sizes
  const hasAvatarSize =
    child.props.size &&
    typeof child.props.size === 'string' &&
    ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(child.props.size);

  return hasAvatarProps || (isCircular && hasAvatarSize);
};

const isLayoutComponent = (name: string) =>
  ['Box', 'Stack', 'Flex', 'Grid', 'Container', 'Wrap', 'Center'].includes(name);

const isTextLikeComponent = (child: ReactElement, name: string): boolean => {
  // Check component name (including variations)
  if (['Text', 'Heading', 'text', 'heading', 'ChakraText', 'ChakraHeading'].includes(name))
    return true;

  // Check for text-like props
  const textProps = ['fontSize', 'fontWeight', 'color', 'textAlign', 'lineHeight', 'fontFamily'];
  const hasTextProps = textProps.some((prop) => child.props[prop] !== undefined);

  // Check if it contains only text content (string children)
  const hasOnlyTextContent = typeof child.props.children === 'string';

  // Check for common text styling props
  const hasTextStyling = !!(
    child.props.fontSize ||
    child.props.fontWeight ||
    child.props.color ||
    child.props.textAlign ||
    child.props.lineHeight ||
    child.props.fontFamily ||
    child.props.size // for Heading size prop
  );

  // If it has text content and any text/spacing props, treat as text
  const hasTextOrSpacingProps = !!(
    hasTextStyling ||
    child.props.mb ||
    child.props.mt ||
    child.props.mx ||
    child.props.my ||
    child.props.margin ||
    child.props.marginBottom ||
    child.props.marginTop
  );

  // Return true if:
  // 1. Name matches text components, OR
  // 2. Has explicit text props, OR
  // 3. Has text content AND has any text/spacing styling
  return hasTextProps || (hasOnlyTextContent && hasTextOrSpacingProps);
};

const isButtonLikeComponent = (child: ReactElement, name: string): boolean => {
  // Check component name first - this is the most reliable
  if (name === 'Button') return true;

  // For Chakra UI, also check for common button component names
  if (['ChakraButton', 'button'].includes(name)) return true;

  // Check for button-specific props (avoid generic props like 'size')
  return !!(
    child.props.onClick ||
    child.props.colorScheme ||
    child.props.variant ||
    child.props.type === 'button' ||
    child.props.type === 'submit' ||
    child.props.disabled !== undefined ||
    child.props.isDisabled !== undefined ||
    child.props.isLoading !== undefined ||
    // Only consider size for buttons if it's combined with other button indicators
    (child.props.size && (child.props.colorScheme || child.props.variant || child.props.onClick))
  );
};

const isLayoutLikeComponent = (child: ReactElement, name: string): boolean => {
  // Check component name
  if (isLayoutComponent(name)) return true;

  // Check for layout-like props
  const layoutProps = ['display', 'flexDirection', 'alignItems', 'justifyContent', 'gap'];
  return layoutProps.some((prop) => child.props[prop] !== undefined);
};

export const Skeletize: React.FC<SkeletizeProps> = ({ loading, mode = 'auto', children }) => {
  if (!loading) return <>{children}</>;

  const renderSkeletonForChild = (child: ReactElement): React.ReactNode => {
    const name = getComponentName(child);

    // Get skeleton props but exclude height/width for buttons to avoid conflicts
    const allProps = getSkeletonProps(child.props);
    const isButton = isButtonLikeComponent(child, name);
    const props = isButton ? { ...allProps, height: undefined, width: undefined } : allProps;

    // Temporary debugging to understand text detection issues
    if (typeof child.props.children === 'string') {
      // Debug removed for production
    }

    if (mode === 'manual') {
      if (child.props['data-skeleton']) {
        // In manual mode, still respect component types for proper skeleton rendering
        // Check buttons FIRST to avoid conflicts with text detection
        if (isButtonLikeComponent(child, name)) {
          const buttonSize = child.props.size || 'md';
          const buttonDimensions = {
            xs: { height: '24px', width: '80px' },
            sm: { height: '32px', width: '96px' },
            md: { height: '40px', width: '120px' },
            lg: { height: '48px', width: '140px' },
            xl: { height: '56px', width: '160px' },
          };

          const dimensions =
            buttonDimensions[buttonSize as keyof typeof buttonDimensions] || buttonDimensions.md;
          const height = child.props.height || dimensions.height;
          const width = child.props.width || dimensions.width;

          // Create clean props without height/width conflicts
          const cleanProps = { ...props };
          delete cleanProps.height;
          delete cleanProps.width;
          return <Skeleton {...cleanProps} height={height} width={width} />;
        }
        if (isTextLikeComponent(child, name)) {
          return <SkeletonText noOfLines={1} {...props} />;
        }
        if (isAvatarLikeComponent(child, name)) {
          return (
            <SkeletonCircle size={child.props.size || child.props.boxSize || '40px'} {...props} />
          );
        }
        // Default to regular skeleton for other components
        return <Skeleton {...props} />;
      }
      if (isLayoutLikeComponent(child, name) && child.props?.children) {
        return cloneElement(child, {
          children: (
            <Skeletize loading mode="manual">
              {child.props.children}
            </Skeletize>
          ),
        });
      }
      return child;
    }

    // Enhanced component detection using both name and props
    // Check buttons FIRST to avoid conflicts with text detection
    if (isButtonLikeComponent(child, name)) {
      // Get the button size and apply appropriate dimensions
      const buttonSize = child.props.size || 'md';
      const buttonDimensions = {
        xs: { height: '24px', width: '80px' },
        sm: { height: '32px', width: '96px' },
        md: { height: '40px', width: '120px' },
        lg: { height: '48px', width: '140px' },
        xl: { height: '56px', width: '160px' },
      };

      const dimensions =
        buttonDimensions[buttonSize as keyof typeof buttonDimensions] || buttonDimensions.md;
      const height = child.props.height || dimensions.height;
      const width = child.props.width || dimensions.width;

      // Apply skeleton props but override with our dimensions
      return <Skeleton {...props} height={height} width={width} />;
    }

    if (isTextLikeComponent(child, name)) {
      return <SkeletonText noOfLines={1} {...props} />;
    }

    if (isAvatarLikeComponent(child, name)) {
      return <SkeletonCircle size={child.props.size || child.props.boxSize || '40px'} {...props} />;
    }

    if (name === 'Image') {
      return <Skeleton {...props} height={child.props.height || '200px'} />;
    }

    // Fallback: if name is empty but we have strong indicators
    if (!name || name === '') {
      // Check if this has text content and styling - likely a text component
      if (
        typeof child.props.children === 'string' &&
        (child.props.fontSize || child.props.fontWeight || child.props.color)
      ) {
        return <SkeletonText noOfLines={1} {...props} />;
      }

      // Check if this has button-like behavior
      if (child.props.onClick || child.props.colorScheme || child.props.variant) {
        // Use default medium button dimensions for fallback
        return <Skeleton {...props} height="40px" width="120px" />;
      }
    }

    // Handle layout components that should wrap their children
    if (isLayoutLikeComponent(child, name) && child.props?.children) {
      return cloneElement(child, {
        children: (
          <Skeletize loading mode="auto">
            {child.props.children}
          </Skeletize>
        ),
      });
    }

    // Default skeleton for components with explicit sizing or data-skeleton
    if (props.height || props.width || child.props['data-skeleton']) {
      return <Skeleton {...props} />;
    }

    // Last resort: check if this looks like a button based on children content
    if (typeof child.props.children === 'string') {
      const content = child.props.children.toLowerCase();
      const buttonKeywords = [
        'click',
        'submit',
        'save',
        'cancel',
        'ok',
        'yes',
        'no',
        'button',
        'btn',
      ];
      if (buttonKeywords.some((keyword) => content.includes(keyword))) {
        // Use default medium button dimensions for button-like content
        return <Skeleton {...props} height="40px" width="120px" />;
      }
    }

    // If we can't determine the component type, return as-is
    return child;
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
