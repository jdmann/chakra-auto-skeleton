import { Box, Button, ChakraProvider, defaultSystem, Heading, Stack, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { Skeletize } from './index';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const TextDebugTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={8}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Text Component Debug Test
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Testing if Text and Heading components are being detected and converted to skeletons.
        </Text>

        {/* Individual component tests */}
        <Stack gap={6}>
          <Box>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Individual Text Components
            </Text>

            <Box border="1px solid" borderColor="red.200" p={4} borderRadius="md" mb={4}>
              <Text fontSize="xs" color="red.600" mb={2}>
                Skeleton Version (should show SkeletonText)
              </Text>
              <Skeletize loading={true}>
                <Text>Simple text that should become skeleton</Text>
              </Skeletize>
            </Box>

            <Box border="1px solid" borderColor="green.200" p={4} borderRadius="md">
              <Text fontSize="xs" color="green.600" mb={2}>
                Real Version (reference)
              </Text>
              <Skeletize loading={false}>
                <Text>Simple text that should become skeleton</Text>
              </Skeletize>
            </Box>
          </Box>

          <Box>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Individual Heading Components
            </Text>

            <Box border="1px solid" borderColor="red.200" p={4} borderRadius="md" mb={4}>
              <Text fontSize="xs" color="red.600" mb={2}>
                Skeleton Version (should show SkeletonText)
              </Text>
              <Skeletize loading={true}>
                <Heading size="lg">Heading that should become skeleton</Heading>
              </Skeletize>
            </Box>

            <Box border="1px solid" borderColor="green.200" p={4} borderRadius="md">
              <Text fontSize="xs" color="green.600" mb={2}>
                Real Version (reference)
              </Text>
              <Skeletize loading={false}>
                <Heading size="lg">Heading that should become skeleton</Heading>
              </Skeletize>
            </Box>
          </Box>

          <Box>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Mixed Components (Text, Heading, Button)
            </Text>

            <Box border="1px solid" borderColor="blue.200" p={4} borderRadius="md" mb={4}>
              <Text fontSize="xs" color="blue.600" mb={2}>
                Skeleton Version (all should be skeletons)
              </Text>
              <Skeletize loading={true}>
                <Stack gap={3}>
                  <Heading size="md">Mixed test heading</Heading>
                  <Text fontSize="lg">Large text content</Text>
                  <Text fontSize="sm" color="gray.600">
                    Small gray text
                  </Text>
                  <Button colorScheme="blue">Action Button</Button>
                </Stack>
              </Skeletize>
            </Box>

            <Box border="1px solid" borderColor="green.200" p={4} borderRadius="md">
              <Text fontSize="xs" color="green.600" mb={2}>
                Real Version (reference)
              </Text>
              <Skeletize loading={false}>
                <Stack gap={3}>
                  <Heading size="md">Mixed test heading</Heading>
                  <Text fontSize="lg">Large text content</Text>
                  <Text fontSize="sm" color="gray.600">
                    Small gray text
                  </Text>
                  <Button colorScheme="blue">Action Button</Button>
                </Stack>
              </Skeletize>
            </Box>
          </Box>

          <Box>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Text with Various Props
            </Text>

            <Box border="1px solid" borderColor="purple.200" p={4} borderRadius="md" mb={4}>
              <Text fontSize="xs" color="purple.600" mb={2}>
                Skeleton Version (styled text)
              </Text>
              <Skeletize loading={true}>
                <Stack gap={2}>
                  <Text fontSize="xl" fontWeight="bold">
                    Bold extra large text
                  </Text>
                  <Text fontSize="md" color="blue.500">
                    Medium blue text
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Centered small text
                  </Text>
                  <Heading size="sm" color="purple.600">
                    Small purple heading
                  </Heading>
                </Stack>
              </Skeletize>
            </Box>

            <Box border="1px solid" borderColor="green.200" p={4} borderRadius="md">
              <Text fontSize="xs" color="green.600" mb={2}>
                Real Version (reference)
              </Text>
              <Skeletize loading={false}>
                <Stack gap={2}>
                  <Text fontSize="xl" fontWeight="bold">
                    Bold extra large text
                  </Text>
                  <Text fontSize="md" color="blue.500">
                    Medium blue text
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Centered small text
                  </Text>
                  <Heading size="sm" color="purple.600">
                    Small purple heading
                  </Heading>
                </Stack>
              </Skeletize>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);
