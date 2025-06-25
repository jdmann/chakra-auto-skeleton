import {
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { Skeletize } from './index';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const BasicUsage: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Box>
        <Heading size="lg" mb={4}>
          Basic Skeletize Usage
        </Heading>
        <Text color="gray.600" mb={6}>
          Toggle loading state to see components transform into skeletons.
        </Text>
      </Box>

      <Stack gap={6}>
        <Box border="1px solid" borderColor="gray.200" p={4} borderRadius="md">
          <Text fontSize="md" fontWeight="semibold" mb={3}>
            Loading State (Skeletons)
          </Text>
          <Skeletize loading={true}>
            <VStack gap={4} align="start">
              <Heading size="lg">Dashboard Overview</Heading>
              <Text fontSize="lg">Welcome back! Here's what's happening today.</Text>
              <HStack gap={4}>
                <Button colorScheme="blue" size="lg">
                  Create New
                </Button>
                <Button variant="outline" size="lg">
                  View Reports
                </Button>
              </HStack>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Quick Stats
                </Text>
                <HStack gap={6}>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      1,234
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Total Users
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      $45,678
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Revenue
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Skeletize>
        </Box>

        <Box border="1px solid" borderColor="green.200" p={4} borderRadius="md">
          <Text fontSize="md" fontWeight="semibold" mb={3}>
            Loaded State (Real Content)
          </Text>
          <Skeletize loading={false}>
            <VStack gap={4} align="start">
              <Heading size="lg">Dashboard Overview</Heading>
              <Text fontSize="lg">Welcome back! Here's what's happening today.</Text>
              <HStack gap={4}>
                <Button colorScheme="blue" size="lg">
                  Create New
                </Button>
                <Button variant="outline" size="lg">
                  View Reports
                </Button>
              </HStack>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Quick Stats
                </Text>
                <HStack gap={6}>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      1,234
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Total Users
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      $45,678
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Revenue
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Skeletize>
        </Box>
      </Stack>
    </Stack>
  </ChakraWrapper>
);

export const ComponentTypes: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Box>
        <Heading size="lg" mb={4}>
          Different Component Types
        </Heading>
        <Text color="gray.600" mb={6}>
          How Skeletize handles different Chakra UI components.
        </Text>
      </Box>

      <Stack gap={4}>
        <Box border="1px solid" borderColor="gray.200" p={4} borderRadius="md">
          <Text fontSize="md" fontWeight="semibold" mb={3}>
            Text Components
          </Text>
          <Skeletize loading={true}>
            <VStack gap={2} align="start">
              <Heading size="xl">Large Heading</Heading>
              <Heading size="md">Medium Heading</Heading>
              <Text fontSize="lg">Large text content</Text>
              <Text fontSize="md">Regular text content</Text>
              <Text fontSize="sm" color="gray.600">
                Small muted text
              </Text>
            </VStack>
          </Skeletize>
        </Box>

        <Box border="1px solid" borderColor="gray.200" p={4} borderRadius="md">
          <Text fontSize="md" fontWeight="semibold" mb={3}>
            Buttons
          </Text>
          <Skeletize loading={true}>
            <HStack gap={4} wrap="wrap">
              <Button size="xs" colorScheme="blue">
                Extra Small
              </Button>
              <Button size="sm" colorScheme="green">
                Small Button
              </Button>
              <Button size="md" colorScheme="purple">
                Medium Button
              </Button>
              <Button size="lg" colorScheme="orange">
                Large Button
              </Button>
              <Button size="xl" colorScheme="red">
                Extra Large
              </Button>
            </HStack>
          </Skeletize>
        </Box>

        <Box border="1px solid" borderColor="gray.200" p={4} borderRadius="md">
          <Text fontSize="md" fontWeight="semibold" mb={3}>
            Mixed Components
          </Text>
          <Skeletize loading={true}>
            <HStack gap={6} align="start">
              <VStack gap={3} align="start">
                <Box borderRadius="full" bg="gray.300" w="64px" h="64px" data-skeleton />
                <Box>
                  <Heading size="md">John Doe</Heading>
                  <Text color="gray.600">Software Engineer</Text>
                  <Text fontSize="sm">San Francisco, CA</Text>
                </Box>
              </VStack>
              <VStack gap={2} align="stretch" flex="1">
                <Button colorScheme="blue" size="sm">
                  Send Message
                </Button>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
                <Button variant="ghost" size="sm">
                  Add to Favorites
                </Button>
              </VStack>
            </HStack>
          </Skeletize>
        </Box>
      </Stack>
    </Stack>
  </ChakraWrapper>
);

export const ManualMode: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Box>
        <Heading size="lg" mb={4}>
          Manual Mode
        </Heading>
        <Text color="gray.600" mb={6}>
          Use data-skeleton attribute to manually control which components become skeletons.
        </Text>
      </Box>

      <Box border="1px solid" borderColor="blue.200" p={4} borderRadius="md">
        <Text fontSize="md" fontWeight="semibold" mb={3}>
          Selective Skeletonization
        </Text>
        <Skeletize loading={true} mode="manual">
          <VStack gap={4} align="start">
            <Heading size="lg" data-skeleton>
              This heading will be skeletonized
            </Heading>
            <Text fontSize="lg">This text will remain visible</Text>
            <HStack gap={4}>
              <Button colorScheme="blue" size="lg" data-skeleton>
                Skeleton Button
              </Button>
              <Button variant="outline" size="lg">
                Normal Button
              </Button>
            </HStack>
            <Box>
              <Text fontSize="sm" fontWeight="medium" mb={2} data-skeleton>
                This label will be skeletonized
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                But this value stays visible: $12,345
              </Text>
            </Box>
          </VStack>
        </Skeletize>
      </Box>
    </Stack>
  </ChakraWrapper>
);
