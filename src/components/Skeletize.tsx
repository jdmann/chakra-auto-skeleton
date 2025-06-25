import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export type SkeletizeProps = {
  loading: boolean;
  mode?: 'auto' | 'manual';
  children: React.ReactNode;
};

const getSkeletonProps = (
  props: Record<string, any>,
  excludeSize: boolean = true,
  excludeDimensions: boolean = false,
) => {
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

  // Build list of props to exclude
  const propsToExclude: string[] = ['colorScheme', 'variant', 'onClick'];

  // Only exclude size for buttons and other components where it conflicts
  if (excludeSize) {
    propsToExclude.push('size');
  }

  // Exclude dimensions when we're handling them manually
  if (excludeDimensions) {
    propsToExclude.push('height', 'width', 'minHeight', 'minWidth', 'maxHeight', 'maxWidth');
  }

  // Filter out excluded props
  const cleanProps = { ...skeletonProps };
  propsToExclude.forEach((prop) => {
    delete cleanProps[prop];
  });

  return cleanProps;
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
    if (renderFn && renderFn.name) {
      // Special handling for Chakra UI v3 component names
      const renderName = renderFn.name;
      if (renderName === 'Button2') return 'Button';
      if (renderName && renderName !== 'anonymous') return renderName;
    }
  }

  // Check for $$typeof and other React internals (forwardRef, memo, etc.)
  if (componentType && componentType.type) {
    const innerType = componentType.type;
    if (innerType && innerType.displayName) return innerType.displayName;
    if (innerType && innerType.name) return innerType.name;
  }

  // For Chakra UI v3, try to infer component type from props and context
  if (componentType && componentType.$$typeof && componentType.render) {
    // This is a forwardRef component, try to infer from context
    const props = child.props;

    // Check if this looks like text content
    if (typeof props.children === 'string') {
      // If it has heading-specific size values, it's likely a Heading
      if (props.size && ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(props.size)) {
        // Check if it's more likely a button or heading based on other props
        if (props.onClick || props.colorScheme || props.variant) {
          return 'Button';
        }
        return 'Heading';
      }

      // If it has text-specific styling props, it's likely Text
      if (
        props.fontSize ||
        props.fontWeight ||
        props.color ||
        props.textAlign ||
        props.lineHeight
      ) {
        return 'Text';
      }

      // Default text-like component based on content
      return 'Text';
    }

    // If it has button-like props, it's probably a Button
    if (props.onClick || props.colorScheme || props.variant || props.type === 'button') {
      return 'Button';
    }
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
  // Check component name (including variations) - be more flexible
  const namePatterns = [
    'Text',
    'Heading',
    'text',
    'heading',
    'ChakraText',
    'ChakraHeading',
    // Chakra UI v3 might use different naming
    'TextRoot',
    'HeadingRoot',
    'Text.Root',
    'Heading.Root',
  ];

  if (namePatterns.includes(name)) {
    return true;
  }

  // MORE AGGRESSIVE DETECTION: If we can't determine component name,
  // use props and content to detect text-like components

  const hasStringChildren = typeof child.props.children === 'string';

  // Check for text-like props
  const textProps = ['fontSize', 'fontWeight', 'color', 'textAlign', 'lineHeight', 'fontFamily'];
  const hasTextProps = textProps.some((prop) => child.props[prop] !== undefined);

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

  // Check for text content and any text/spacing props
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

  // Additional check: look at the component structure for text-like patterns
  const typeString = (child.type as any)?.toString() || '';
  const hasTextInTypeString =
    typeString.toLowerCase().includes('text') || typeString.toLowerCase().includes('heading');

  // AGGRESSIVE CHECK: If it has string children and NO button-like props,
  // and has ANY styling prop at all, treat it as text
  const hasButtonLikeProps = !!(
    child.props.onClick ||
    child.props.onSubmit ||
    child.props.type === 'button' ||
    child.props.type === 'submit' ||
    child.props.colorScheme ||
    child.props.variant
  );

  // If it has string children and no button-like behavior, and has some styling,
  // it's probably a text component
  if (hasStringChildren && !hasButtonLikeProps && (hasTextStyling || hasTextOrSpacingProps)) {
    return true;
  }

  // Even more aggressive: if it has string children and NO interactive props,
  // and we can't identify what it is, assume it's text
  if (hasStringChildren && !hasButtonLikeProps && name === '') {
    return true;
  }

  // Return true if:
  // 1. Name matches text components, OR
  // 2. Has explicit text props, OR
  // 3. Has text content AND has any text/spacing styling, OR
  // 4. Type string contains text/heading
  return hasTextProps || (hasStringChildren && hasTextOrSpacingProps) || hasTextInTypeString;
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
    if (mode === 'manual') {
      if (child.props['data-skeleton']) {
        // In manual mode, still respect component types for proper skeleton rendering
        // Check buttons FIRST to avoid conflicts with text detection
        if (isButtonLikeComponent(child, name)) {
          // Use the same recipe-aware approach for manual mode
          const MeasuredSkeletonButton = () => {
            const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(
              null,
            );
            const measureRef = useRef<HTMLButtonElement>(null);

            useEffect(() => {
              if (measureRef.current) {
                const rect = measureRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
              }
            }, []);

            // Use layout effect for immediate measurement to reduce flash
            useLayoutEffect(() => {
              if (measureRef.current) {
                const rect = measureRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
              }
            }, []);

            const buttonProps = { ...child.props };

            // Remove interactive props and data-skeleton
            delete buttonProps.onClick;
            delete buttonProps.onMouseEnter;
            delete buttonProps.onMouseLeave;
            delete buttonProps.onFocus;
            delete buttonProps.onBlur;
            delete buttonProps.type;
            delete buttonProps['data-skeleton'];

            return (
              <Box position="relative" display="inline-block">
                {/* Invisible measuring button */}
                {cloneElement(child, {
                  ...buttonProps,
                  ref: measureRef,
                  position: 'absolute',
                  opacity: 0,
                  pointerEvents: 'none',
                  zIndex: -1,
                })}

                {/* Skeleton with measured dimensions */}
                <Skeleton
                  width={dimensions ? `${dimensions.width}px` : 'auto'}
                  height={dimensions ? `${dimensions.height}px` : 'auto'}
                  minWidth={dimensions ? `${dimensions.width}px` : '120px'}
                  minHeight={dimensions ? `${dimensions.height}px` : '40px'}
                  borderRadius="md"
                  display="inline-block"
                />
              </Box>
            );
          };

          return <MeasuredSkeletonButton />;
        }
        if (isTextLikeComponent(child, name)) {
          // For text components, preserve size prop for SkeletonText
          const props = getSkeletonProps(child.props, false);
          return <SkeletonText noOfLines={1} {...props} />;
        }
        if (isAvatarLikeComponent(child, name)) {
          // For avatars, exclude size since we handle it manually
          const props = getSkeletonProps(child.props, true);
          return (
            <SkeletonCircle size={child.props.size || child.props.boxSize || '40px'} {...props} />
          );
        }
        // Default to regular skeleton for other components
        const props = getSkeletonProps(child.props, true);
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
    } // Enhanced component detection using both name and props
    // Check buttons FIRST to avoid conflicts with text detection
    if (isButtonLikeComponent(child, name)) {
      // RECIPE-AWARE APPROACH: Use a measuring wrapper to get recipe-calculated dimensions
      // This works with Chakra's recipe system by letting the button calculate its own size

      const MeasuredSkeletonButton = () => {
        const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(
          null,
        );
        const measureRef = useRef<HTMLButtonElement>(null);

        useEffect(() => {
          if (measureRef.current) {
            const rect = measureRef.current.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
          }
        }, []);

        // Use layout effect for immediate measurement to reduce flash
        React.useLayoutEffect(() => {
          if (measureRef.current) {
            const rect = measureRef.current.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
          }
        }, []);

        const buttonProps = { ...child.props };

        // Remove interactive props but keep all sizing props
        delete buttonProps.onClick;
        delete buttonProps.onMouseEnter;
        delete buttonProps.onMouseLeave;
        delete buttonProps.onFocus;
        delete buttonProps.onBlur;
        delete buttonProps.type;

        return (
          <Box position="relative" display="inline-block">
            {/* Invisible measuring button - let recipe calculate correct size */}
            {cloneElement(child, {
              ...buttonProps,
              ref: measureRef,
              position: 'absolute',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: -1,
            })}

            {/* Skeleton with measured dimensions */}
            <Skeleton
              width={dimensions ? `${dimensions.width}px` : 'auto'}
              height={dimensions ? `${dimensions.height}px` : 'auto'}
              minWidth={dimensions ? `${dimensions.width}px` : '120px'}
              minHeight={dimensions ? `${dimensions.height}px` : '40px'}
              borderRadius="md"
              display="inline-block"
            />
          </Box>
        );
      };

      return <MeasuredSkeletonButton />;
    }

    if (isTextLikeComponent(child, name)) {
      // For text components, preserve size prop for SkeletonText
      const props = getSkeletonProps(child.props, false);
      return <SkeletonText noOfLines={1} {...props} />;
    }

    if (isAvatarLikeComponent(child, name)) {
      // For avatars, exclude size since we handle it manually
      const props = getSkeletonProps(child.props, true);
      return <SkeletonCircle size={child.props.size || child.props.boxSize || '40px'} {...props} />;
    }

    if (name === 'Image') {
      const props = getSkeletonProps(child.props, true);
      return <Skeleton {...props} height={child.props.height || '200px'} />;
    }

    // Fallback: if name is empty but we have strong indicators
    if (!name || name === '') {
      // Check if this has text content and styling - likely a text component
      if (
        typeof child.props.children === 'string' &&
        (child.props.fontSize || child.props.fontWeight || child.props.color)
      ) {
        const props = getSkeletonProps(child.props, false);
        return <SkeletonText noOfLines={1} {...props} />;
      }

      // Check if this has button-like behavior
      if (child.props.onClick || child.props.colorScheme || child.props.variant) {
        // This looks like a button but we couldn't identify the component type
        // Fall back to Box + Skeleton approach
        const props = getSkeletonProps(child.props, true);
        return (
          <Box minH="40px" minHeight="40px" h="40px" flexShrink={0} flex="0 0 auto" display="block">
            <Skeleton {...props} height="40px" width="120px" />
          </Box>
        );
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
    const defaultProps = getSkeletonProps(child.props, true);
    if (defaultProps.height || defaultProps.width || child.props['data-skeleton']) {
      return <Skeleton {...defaultProps} />;
    }

    // Last resort: check if this looks like a button based on children content
    if (typeof child.props.children === 'string') {
      // AGGRESSIVE FALLBACK: If it has string children but no button-like props,
      // and we couldn't identify what it is, assume it's text
      const hasButtonLikeProps = !!(
        child.props.onClick ||
        child.props.colorScheme ||
        child.props.variant ||
        child.props.type === 'button'
      );

      if (!hasButtonLikeProps) {
        // Most likely a text component that we failed to detect
        const props = getSkeletonProps(child.props, false);
        return <SkeletonText noOfLines={1} {...props} />;
      }

      // Check if this looks like a button based on children content
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
        // This might be a button-like component, try the skeleton button approach
        // But since we don't have access to a Button component here, fall back to Box + Skeleton
        const props = getSkeletonProps(child.props, true);
        return (
          <Box minH="40px" minHeight="40px" h="40px" flexShrink={0} flex="0 0 auto" display="block">
            <Skeleton {...props} height="40px" width="120px" />
          </Box>
        );
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
