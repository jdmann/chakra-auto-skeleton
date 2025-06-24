import {
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Heading,
  Skeleton,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { Skeletize } from './index';

// Debug version of OverlayMeasuredSkeleton with logging
const DebugOverlayMeasuredSkeleton: React.FC<{
  child: React.ReactElement;
  name: string;
}> = ({ child, name }) => {
  const measuredRef = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  React.useLayoutEffect(() => {
    if (!measuredRef.current) return;
    const node = measuredRef.current;

    function updateSize() {
      const rect = node.getBoundingClientRect();
      const newDimensions = { width: rect.width, height: rect.height };
      console.log(`🔍 [${name}] Measured dimensions:`, newDimensions);
      console.log(`🔍 [${name}] Child props:`, child.props);
      setDimensions(newDimensions);
    }

    updateSize();

    if (window.ResizeObserver) {
      const ro = new window.ResizeObserver((entries) => {
        console.log(`📐 [${name}] ResizeObserver triggered`);
        updateSize();
      });
      ro.observe(node);
      return () => ro.disconnect();
    }
  }, [child, name]);

  console.log(`🎯 [${name}] Rendering overlay with dimensions:`, dimensions);

  return (
    <Box position="relative" display="inline-block" border="2px solid red" p={1}>
      <Text fontSize="xs" color="red.500" position="absolute" top="-20px" left="0" zIndex={10}>
        {name} ({dimensions.width.toFixed(0)}×{dimensions.height.toFixed(0)})
      </Text>

      {/* Render the actual component invisibly to establish layout size */}
      <Box ref={measuredRef} visibility="hidden" aria-hidden="true" pointerEvents="none">
        {child}
      </Box>

      {/* Overlay the skeleton with measured sizing */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width={dimensions.width > 0 ? `${dimensions.width}px` : '120px'}
        height={dimensions.height > 0 ? `${dimensions.height}px` : '40px'}
        zIndex={1}
        pointerEvents="none"
        border="1px dashed blue"
      >
        <Skeleton width="100%" height="100%" />
      </Box>
    </Box>
  );
};

// Debug version of Skeletize that uses debug overlay
const DebugSkeletize: React.FC<{
  loading: boolean;
  children: React.ReactNode;
}> = ({ loading, children }) => {
  if (!loading) return <>{children}</>;

  const getComponentName = (child: React.ReactElement): string => {
    if (typeof child.type === 'string') return child.type;
    const componentType = child.type as any;
    if (componentType && componentType.displayName) return componentType.displayName;
    if (componentType && componentType.name) return componentType.name;
    return 'Unknown';
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const name = getComponentName(child);
        return <DebugOverlayMeasuredSkeleton child={child} name={name} />;
      })}
    </>
  );
};

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const OverlayDebugTest: Story = () => (
  <ChakraWrapper>
    <Box>
      <Heading size="md" mb={4}>
        🐛 Overlay Strategy Debug
      </Heading>
      <Text mb={4} fontSize="sm" color="gray.600">
        Debug version with console logging and visual indicators. Open browser console to see logs.
      </Text>

      <Stack gap={6}>
        <Box>
          <Heading size="sm" mb={2}>
            Button Sizes Debug
          </Heading>
          <Text fontSize="xs" color="gray.500" mb={2}>
            Red border = container, Blue dashed = skeleton overlay
          </Text>
          <Wrap gap={4}>
            <DebugSkeletize loading={true}>
              <Button size="xs">XS</Button>
            </DebugSkeletize>
            <DebugSkeletize loading={true}>
              <Button size="sm">SM</Button>
            </DebugSkeletize>
            <DebugSkeletize loading={true}>
              <Button size="md">MD</Button>
            </DebugSkeletize>
            <DebugSkeletize loading={true}>
              <Button size="lg">LG</Button>
            </DebugSkeletize>
            <DebugSkeletize loading={true}>
              <Button size="xl">XL</Button>
            </DebugSkeletize>
          </Wrap>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Reference Buttons (No Loading)
          </Heading>
          <Wrap gap={4}>
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
            <Button size="xl">XL</Button>
          </Wrap>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Regular Overlay Strategy (For Comparison)
          </Heading>
          <Wrap gap={4}>
            <Skeletize loading={true} strategy="overlay">
              <Button size="xs">XS</Button>
            </Skeletize>
            <Skeletize loading={true} strategy="overlay">
              <Button size="sm">SM</Button>
            </Skeletize>
            <Skeletize loading={true} strategy="overlay">
              <Button size="md">MD</Button>
            </Skeletize>
            <Skeletize loading={true} strategy="overlay">
              <Button size="lg">LG</Button>
            </Skeletize>
            <Skeletize loading={true} strategy="overlay">
              <Button size="xl">XL</Button>
            </Skeletize>
          </Wrap>
        </Box>
      </Stack>
    </Box>
  </ChakraWrapper>
);

export default {
  OverlayDebugTest,
};
