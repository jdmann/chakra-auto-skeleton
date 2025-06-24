import { Box, Button, ChakraProvider, defaultSystem, Stack, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { Skeletize } from './index';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const ButtonEdgeCases: Story = () => (
  <ChakraWrapper>
    <Stack gap={8}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Button Edge Cases Test
        </Text>

        {/* Buttons with explicit dimensions */}
        <Box mb={6}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Buttons with explicit width/height
          </Text>
          <Stack direction="row" gap={4} alignItems="center">
            <Box>
              <Text fontSize="xs" color="gray.500" mb={1}>
                Skeleton
              </Text>
              <Skeletize loading={true}>
                <Button width="200px" height="60px">
                  Custom Size
                </Button>
              </Skeletize>
            </Box>
            <Box>
              <Text fontSize="xs" color="gray.500" mb={1}>
                Real
              </Text>
              <Button width="200px" height="60px">
                Custom Size
              </Button>
            </Box>
          </Stack>
        </Box>

        {/* Buttons with variants and color schemes */}
        <Box mb={6}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Different variants
          </Text>
          <Stack direction="row" gap={4} alignItems="center" flexWrap="wrap">
            {(['solid', 'outline', 'ghost'] as const).map((variant) => (
              <Box key={variant}>
                <Text fontSize="xs" color="gray.500" mb={1}>
                  Skeleton {variant}
                </Text>
                <Skeletize loading={true}>
                  <Button variant={variant} colorScheme="blue" size="md">
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </Button>
                </Skeletize>
              </Box>
            ))}
          </Stack>
          <Stack direction="row" gap={4} alignItems="center" flexWrap="wrap" mt={2}>
            {(['solid', 'outline', 'ghost'] as const).map((variant) => (
              <Box key={variant}>
                <Text fontSize="xs" color="gray.500" mb={1}>
                  Real {variant}
                </Text>
                <Button variant={variant} colorScheme="blue" size="md">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Buttons in flex layouts */}
        <Box mb={6}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Buttons in flex layout
          </Text>
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1}>
              Skeleton flex layout
            </Text>
            <Box display="flex" gap={2} mb={2}>
              <Skeletize loading={true}>
                <Button size="sm" flex="1">
                  Flex Button 1
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button size="sm" flex="1">
                  Flex Button 2
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button size="sm">Fixed Button</Button>
              </Skeletize>
            </Box>
          </Box>
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1}>
              Real flex layout
            </Text>
            <Box display="flex" gap={2}>
              <Button size="sm" flex="1">
                Flex Button 1
              </Button>
              <Button size="sm" flex="1">
                Flex Button 2
              </Button>
              <Button size="sm">Fixed Button</Button>
            </Box>
          </Box>
        </Box>

        {/* Buttons without size prop (should default to md) */}
        <Box mb={6}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Buttons without size prop (default)
          </Text>
          <Stack direction="row" gap={4} alignItems="center">
            <Box>
              <Text fontSize="xs" color="gray.500" mb={1}>
                Skeleton default
              </Text>
              <Skeletize loading={true}>
                <Button>Default Button</Button>
              </Skeletize>
            </Box>
            <Box>
              <Text fontSize="xs" color="gray.500" mb={1}>
                Real default
              </Text>
              <Button>Default Button</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  </ChakraWrapper>
);
