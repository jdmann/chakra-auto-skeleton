import { Box, Button, ChakraProvider, defaultSystem, Heading, Stack, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';

// Test to understand how Chakra UI buttons actually render
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const ButtonInspection: Story = () => {
  const [measurements, setMeasurements] = React.useState<{
    [key: string]: { width: number; height: number };
  }>({});

  React.useEffect(() => {
    // Measure all buttons after render
    const buttons = document.querySelectorAll('[data-testid]');
    const newMeasurements: { [key: string]: { width: number; height: number } } = {};

    buttons.forEach((button) => {
      const testId = button.getAttribute('data-testid');
      if (testId) {
        const rect = button.getBoundingClientRect();
        newMeasurements[testId] = {
          width: rect.width,
          height: rect.height,
        };
      }
    });

    setMeasurements(newMeasurements);
    console.log('Button measurements:', newMeasurements);
  }, []);

  return (
    <ChakraWrapper>
      <Stack gap={6}>
        <Box>
          <Heading size="md" mb={4}>
            Button Size Inspection
          </Heading>
          <Text mb={4} fontSize="sm" color="gray.600">
            Let's see what dimensions different button sizes actually have.
          </Text>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Visible Buttons
          </Heading>
          <Stack direction="row" gap={4} align="start">
            <Button size="xs" data-testid="visible-xs">
              XS Button
            </Button>
            <Button size="sm" data-testid="visible-sm">
              SM Button
            </Button>
            <Button size="md" data-testid="visible-md">
              MD Button
            </Button>
            <Button size="lg" data-testid="visible-lg">
              LG Button
            </Button>
            <Button size="xl" data-testid="visible-xl">
              XL Button
            </Button>
          </Stack>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Hidden Buttons (visibility: hidden)
          </Heading>
          <Stack direction="row" gap={4} align="start">
            <Button size="xs" data-testid="hidden-xs" visibility="hidden">
              XS Button
            </Button>
            <Button size="sm" data-testid="hidden-sm" visibility="hidden">
              SM Button
            </Button>
            <Button size="md" data-testid="hidden-md" visibility="hidden">
              MD Button
            </Button>
            <Button size="lg" data-testid="hidden-lg" visibility="hidden">
              LG Button
            </Button>
            <Button size="xl" data-testid="hidden-xl" visibility="hidden">
              XL Button
            </Button>
          </Stack>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Measurements
          </Heading>
          {Object.entries(measurements).map(([testId, dims]) => (
            <Text key={testId} fontSize="sm">
              {testId}: {dims.width.toFixed(1)}px × {dims.height.toFixed(1)}px
            </Text>
          ))}
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Manual Overlay Test
          </Heading>
          <Stack direction="row" gap={4} align="start">
            {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
              <Box key={size} position="relative" display="inline-block">
                <Button size={size as any} visibility="hidden" data-testid={`overlay-${size}`}>
                  {size.toUpperCase()} Button
                </Button>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width={
                    measurements[`overlay-${size}`]?.width
                      ? `${measurements[`overlay-${size}`].width}px`
                      : '120px'
                  }
                  height={
                    measurements[`overlay-${size}`]?.height
                      ? `${measurements[`overlay-${size}`].height}px`
                      : '40px'
                  }
                  bg="gray.200"
                  border="1px solid blue"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  color="blue.600"
                >
                  Skeleton
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </ChakraWrapper>
  );
};

export default {
  ButtonInspection,
};
