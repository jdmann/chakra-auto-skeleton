import { Box, Button, ChakraProvider, defaultSystem, Heading, Stack, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';
import { AutoSkeleton } from './index';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const Loading: Story = () => (
  <ChakraWrapper>
    <AutoSkeleton loading={true}>
      <Stack gap={4}>
        <Heading size="lg">Dashboard Overview</Heading>
        <Box display="flex" alignItems="center" gap={3}>
          <Box w="50px" h="50px" bg="gray.200" borderRadius="full" />
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              John Doe
            </Text>
            <Text fontSize="sm" color="gray.500">
              Software Engineer
            </Text>
          </Box>
        </Box>
        <Box>
          <Text mb={2}>Welcome back! Here's your latest activity:</Text>
          <Box
            height="200px"
            width="400px"
            bg="gray.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            color="gray.500"
          >
            Activity Chart Placeholder
          </Box>
        </Box>
        <Stack direction="row" gap={3}>
          <Button colorScheme="blue">View Details</Button>
          <Button variant="outline">Export Data</Button>
        </Stack>
      </Stack>
    </AutoSkeleton>
  </ChakraWrapper>
);

export const NotLoading: Story = () => (
  <ChakraWrapper>
    <AutoSkeleton loading={false}>
      <Stack gap={4}>
        <Heading size="lg">Dashboard Overview</Heading>
        <Box display="flex" alignItems="center" gap={3}>
          <Box w="50px" h="50px" bg="gray.200" borderRadius="full" />
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              John Doe
            </Text>
            <Text fontSize="sm" color="gray.500">
              Software Engineer
            </Text>
          </Box>
        </Box>
        <Box>
          <Text mb={2}>Welcome back! Here's your latest activity:</Text>
          <Box
            height="200px"
            width="400px"
            bg="gray.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            color="gray.500"
          >
            Activity Chart Placeholder
          </Box>
        </Box>
        <Stack direction="row" gap={3}>
          <Button colorScheme="blue">View Details</Button>
          <Button variant="outline">Export Data</Button>
        </Stack>
      </Stack>
    </AutoSkeleton>
  </ChakraWrapper>
);

export const ManualMode: Story = () => (
  <ChakraWrapper>
    <AutoSkeleton loading={true} mode="manual">
      <Stack gap={4}>
        <Heading size="lg">Manual Skeleton Mode</Heading>
        <Text data-skeleton>This text will become a skeleton</Text>
        <Text>This text will remain unchanged</Text>
        <Box data-skeleton height="100px" width="300px" bg="gray.100" />
        <Button>This button will remain unchanged</Button>
        <Button data-skeleton>This button will become a skeleton</Button>
      </Stack>
    </AutoSkeleton>
  </ChakraWrapper>
);

export const TextComponents: Story = () => (
  <ChakraWrapper>
    <AutoSkeleton loading={true}>
      <Stack gap={4}>
        <Heading size="xl">Main Title</Heading>
        <Heading size="lg">Section Title</Heading>
        <Heading size="md">Subsection Title</Heading>
        <Text fontSize="lg">Large body text content here</Text>
        <Text fontSize="md">Regular body text content here</Text>
        <Text fontSize="sm">Small body text content here</Text>
      </Stack>
    </AutoSkeleton>
  </ChakraWrapper>
);

export const ButtonsOnly: Story = () => (
  <ChakraWrapper>
    <AutoSkeleton loading={true}>
      <Stack gap={4}>
        <Heading size="lg">Buttons</Heading>
        <Stack direction="row" gap={3}>
          <Button size="lg" colorScheme="blue">
            Large Button
          </Button>
          <Button size="md" colorScheme="green">
            Medium Button
          </Button>
          <Button size="sm" colorScheme="red">
            Small Button
          </Button>
        </Stack>
      </Stack>
    </AutoSkeleton>
  </ChakraWrapper>
);
