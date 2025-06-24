import { Box, Button, ChakraProvider, defaultSystem, Skeleton, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { Skeletize } from './index';

// Manual implementation of what our Skeletize should do for a button
const ManualButtonSkeleton = ({ size }: { size: string }) => {
  const buttonDimensions = {
    xs: { height: '24px', width: '80px' },
    sm: { height: '32px', width: '96px' },
    md: { height: '40px', width: '120px' },
    lg: { height: '48px', width: '140px' },
    xl: { height: '56px', width: '160px' },
  };

  const dimensions = buttonDimensions[size as keyof typeof buttonDimensions] || buttonDimensions.md;

  return (
    <Box
      minH={dimensions.height}
      minHeight={dimensions.height}
      h={dimensions.height}
      w={dimensions.width}
      width={dimensions.width}
      minW={dimensions.width}
      minWidth={dimensions.width}
      flexShrink={0}
      flex="0 0 auto"
      display="inline-block"
      border="1px solid orange" // Debug border
    >
      <Skeleton height="100%" width="100%" />
    </Box>
  );
};

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const DebugComparison: Story = () => (
  <ChakraWrapper>
    <Box>
      <Text mb={4} fontWeight="bold" fontSize="lg">
        Debug Comparison Test
      </Text>

      <Box mb={6}>
        <Text mb={2} fontSize="md" fontWeight="semibold">
          Manual Implementation (Orange Border)
        </Text>
        <Box display="flex" gap={4} alignItems="start" flexWrap="wrap">
          <Box>
            <Text fontSize="xs" mb={1}>
              XS Manual
            </Text>
            <ManualButtonSkeleton size="xs" />
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              SM Manual
            </Text>
            <ManualButtonSkeleton size="sm" />
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              MD Manual
            </Text>
            <ManualButtonSkeleton size="md" />
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              LG Manual
            </Text>
            <ManualButtonSkeleton size="lg" />
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              XL Manual
            </Text>
            <ManualButtonSkeleton size="xl" />
          </Box>
        </Box>
      </Box>

      <Box mb={6}>
        <Text mb={2} fontSize="md" fontWeight="semibold">
          Skeletize Component
        </Text>
        <Box display="flex" gap={4} alignItems="start" flexWrap="wrap">
          <Box>
            <Text fontSize="xs" mb={1}>
              XS Skeletize
            </Text>
            <Skeletize loading={true}>
              <Button size="xs">XS Button</Button>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              SM Skeletize
            </Text>
            <Skeletize loading={true}>
              <Button size="sm">SM Button</Button>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              MD Skeletize
            </Text>
            <Skeletize loading={true}>
              <Button size="md">MD Button</Button>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              LG Skeletize
            </Text>
            <Skeletize loading={true}>
              <Button size="lg">LG Button</Button>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              XL Skeletize
            </Text>
            <Skeletize loading={true}>
              <Button size="xl">XL Button</Button>
            </Skeletize>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text mb={2} fontSize="md" fontWeight="semibold">
          Reference Buttons
        </Text>
        <Box display="flex" gap={4} alignItems="start" flexWrap="wrap">
          <Box>
            <Text fontSize="xs" mb={1}>
              XS Button
            </Text>
            <Button size="xs">XS Button</Button>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              SM Button
            </Text>
            <Button size="sm">SM Button</Button>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              MD Button
            </Text>
            <Button size="md">MD Button</Button>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              LG Button
            </Text>
            <Button size="lg">LG Button</Button>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              XL Button
            </Text>
            <Button size="xl">XL Button</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </ChakraWrapper>
);

export default {
  DebugComparison,
};
