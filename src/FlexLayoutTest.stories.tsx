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

export const FlexLayoutTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={8}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Flex Layout Test - Stack and Flex Components
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Testing skeleton buttons in various flex layouts to ensure they maintain correct
          dimensions.
        </Text>

        {/* Horizontal Stack test */}
        <Box mb={8}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Horizontal Stack (direction="row")
          </Text>

          <Box mb={4}>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Skeleton Stack (should match real layout exactly)
            </Text>
            <Stack direction="row" gap={4}>
              <Skeletize loading={true}>
                <Button size="sm" flex="1">
                  Button 1
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button size="sm" flex="1">
                  Button 2
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button size="sm">Fixed Button</Button>
              </Skeletize>
            </Stack>
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Real Stack (reference)
            </Text>
            <Stack direction="row" gap={4}>
              <Button size="sm" flex="1">
                Button 1
              </Button>
              <Button size="sm" flex="1">
                Button 2
              </Button>
              <Button size="sm">Fixed Button</Button>
            </Stack>
          </Box>
        </Box>

        {/* CSS Flex test */}
        <Box mb={8}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            CSS Flex Container (display="flex")
          </Text>

          <Box mb={4}>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Skeleton Flex (should match real layout exactly)
            </Text>
            <Box display="flex" gap={3}>
              <Skeletize loading={true}>
                <Button size="md" flex="2">
                  Primary Action
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button size="md" flex="1">
                  Secondary
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button size="md">Cancel</Button>
              </Skeletize>
            </Box>
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Real Flex (reference)
            </Text>
            <Box display="flex" gap={3}>
              <Button size="md" flex="2">
                Primary Action
              </Button>
              <Button size="md" flex="1">
                Secondary
              </Button>
              <Button size="md">Cancel</Button>
            </Box>
          </Box>
        </Box>

        {/* Vertical Stack test */}
        <Box mb={8}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Vertical Stack (default direction)
          </Text>

          <Box display="flex" gap={8}>
            <Box flex="1">
              <Text fontSize="xs" color="gray.500" mb={2}>
                Skeleton Stack
              </Text>
              <Stack gap={2} maxW="200px">
                <Skeletize loading={true}>
                  <Button size="sm" width="full">
                    Full Width Button
                  </Button>
                </Skeletize>
                <Skeletize loading={true}>
                  <Button size="sm">Auto Width</Button>
                </Skeletize>
                <Skeletize loading={true}>
                  <Button size="sm" alignSelf="flex-end">
                    Right Aligned
                  </Button>
                </Skeletize>
              </Stack>
            </Box>

            <Box flex="1">
              <Text fontSize="xs" color="gray.500" mb={2}>
                Real Stack
              </Text>
              <Stack gap={2} maxW="200px">
                <Button size="sm" width="full">
                  Full Width Button
                </Button>
                <Button size="sm">Auto Width</Button>
                <Button size="sm" alignSelf="flex-end">
                  Right Aligned
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Complex nested layout */}
        <Box mb={8}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Complex Nested Layout
          </Text>

          <Box mb={4}>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Skeleton Complex Layout
            </Text>
            <Stack gap={4}>
              <Stack direction="row" gap={2}>
                <Skeletize loading={true}>
                  <Button size="xs" flex="1">
                    Save
                  </Button>
                </Skeletize>
                <Skeletize loading={true}>
                  <Button size="xs" flex="1">
                    Preview
                  </Button>
                </Skeletize>
                <Skeletize loading={true}>
                  <Button size="xs">Cancel</Button>
                </Skeletize>
              </Stack>
              <Box display="flex" justifyContent="space-between">
                <Skeletize loading={true}>
                  <Button size="lg" flex="1" mr={4}>
                    Primary Action
                  </Button>
                </Skeletize>
                <Skeletize loading={true}>
                  <Button size="lg" variant="outline">
                    Secondary
                  </Button>
                </Skeletize>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Real Complex Layout
            </Text>
            <Stack gap={4}>
              <Stack direction="row" gap={2}>
                <Button size="xs" flex="1">
                  Save
                </Button>
                <Button size="xs" flex="1">
                  Preview
                </Button>
                <Button size="xs">Cancel</Button>
              </Stack>
              <Box display="flex" justifyContent="space-between">
                <Button size="lg" flex="1" mr={4}>
                  Primary Action
                </Button>
                <Button size="lg" variant="outline">
                  Secondary
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  </ChakraWrapper>
);
