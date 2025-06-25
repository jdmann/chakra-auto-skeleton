import {
  Badge,
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Skeletize } from './index';

export default {
  title: 'Skeletize/Showcase',
};

const ChakraWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={8} bg="gray.50" minH="100vh">
      {children}
    </Box>
  </ChakraProvider>
);

export const Buttons = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ChakraWrap>
      <Heading size="md" mb={4}>
        Button Variants & Sizes
      </Heading>
      <Button mb={4} onClick={() => setLoading((l) => !l)}>
        Toggle Loading
      </Button>
      <Skeletize loading={loading}>
        <VStack align="start" gap={6}>
          <HStack gap={4}>
            <Button colorScheme="blue" size="sm">
              Solid sm
            </Button>
            <Button colorScheme="blue" size="md">
              Solid md
            </Button>
            <Button colorScheme="blue" size="lg">
              Solid lg
            </Button>
          </HStack>
          <HStack gap={4}>
            <Button variant="outline" colorScheme="green" size="sm">
              Outline sm
            </Button>
            <Button variant="outline" colorScheme="green" size="md">
              Outline md
            </Button>
            <Button variant="outline" colorScheme="green" size="lg">
              Outline lg
            </Button>
          </HStack>
          <HStack gap={4}>
            <Button variant="ghost" colorScheme="purple" size="sm">
              Ghost sm
            </Button>
            <Button variant="ghost" colorScheme="purple" size="md">
              Ghost md
            </Button>
            <Button variant="ghost" colorScheme="purple" size="lg">
              Ghost lg
            </Button>
          </HStack>
        </VStack>
      </Skeletize>
    </ChakraWrap>
  );
};

export const Inputs = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ChakraWrap>
      <Heading size="md" mb={4}>
        Text Inputs (V3 Only)
      </Heading>
      <Button mb={4} onClick={() => setLoading((l) => !l)}>
        Toggle Loading
      </Button>
      <Skeletize loading={loading}>
        <VStack align="start" gap={6}>
          <Box>
            <Text mb={1}>Email address</Text>
            <Input placeholder="Enter email" />
          </Box>
          <Box>
            <Text mb={1}>Password</Text>
            <Input type="password" placeholder="Password" />
          </Box>
        </VStack>
      </Skeletize>
    </ChakraWrap>
  );
};

export const ComplexLayout = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ChakraWrap>
      <Heading size="md" mb={4}>
        Complex Layout Example
      </Heading>
      <Button mb={4} onClick={() => setLoading((l) => !l)}>
        Toggle Loading
      </Button>
      <Skeletize loading={loading}>
        <SimpleGrid columns={[1, 2]} gap={10}>
          <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
            <HStack mb={4}>
              <Box boxSize="60px" bg="gray.200" borderRadius="full" data-skeleton />
              <VStack align="start">
                <Heading size="md">Jane Doe</Heading>
                <Text color="gray.500">Product Manager</Text>
                <Badge colorScheme="green">Active</Badge>
              </VStack>
            </HStack>
            <Text mb={2}>Jane is responsible for product vision and roadmap.</Text>
            <Button colorScheme="blue" size="sm">
              Message
            </Button>
          </Box>
          <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading size="sm" mb={2}>
              E-commerce Card
            </Heading>
            <Box boxSize="100px" bg="gray.200" borderRadius="md" mb={3} data-skeleton />
            <Text fontWeight="bold">Awesome Sneakers</Text>
            <Text color="gray.500">$129.99</Text>
            <Button colorScheme="orange" size="sm" mt={2}>
              Add to Cart
            </Button>
          </Box>
        </SimpleGrid>
      </Skeletize>
    </ChakraWrap>
  );
};

export const SkeletonVariants = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ChakraWrap>
      <Heading size="md" mb={4}>
        Skeleton Variants
      </Heading>
      <Button mb={4} onClick={() => setLoading((l) => !l)}>
        Toggle Loading
      </Button>
      <VStack align="start" gap={8}>
        <Box>
          <Text mb={2} fontWeight="bold">
            Pulse (default)
          </Text>
          <Skeletize loading={loading} variant="pulse">
            <Box p={3} w="300px" data-skeleton>
              Pulse animation (default)
            </Box>
          </Skeletize>
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold">
            Fade
          </Text>
          <Skeletize loading={loading} variant="fade">
            <Box p={3} w="300px" data-skeleton>
              Fade animation
            </Box>
          </Skeletize>
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold">
            Static
          </Text>
          <Skeletize loading={loading} variant="static">
            <Box p={3} w="300px" data-skeleton>
              Static skeleton (no animation)
            </Box>
          </Skeletize>
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold">
            None
          </Text>
          <Skeletize loading={loading} variant="none">
            <Box p={3} w="300px" data-skeleton>
              No skeleton effect
            </Box>
          </Skeletize>
        </Box>
        <Box>
          <Text mb={2} fontWeight="bold">
            Custom Colors
          </Text>
          <Skeletize
            loading={loading}
            variant="pulse"
            skeletonColor="#fbbf24"
            skeletonEndColor="#fde68a"
          >
            <Box p={3} w="300px" data-skeleton>
              Custom color skeleton
            </Box>
          </Skeletize>
        </Box>
      </VStack>
    </ChakraWrap>
  );
};
