import { Box, Button, ChakraProvider, defaultSystem, Skeleton, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

export const SimpleSkeletonTest: Story = () => (
  <ChakraWrapper>
    <Box>
      <Text mb={4} fontWeight="bold">
        Simple Skeleton Test
      </Text>

      <Box mb={6}>
        <Text mb={2} fontSize="sm">
          Manual Skeleton (should work):
        </Text>
        <Box display="flex" gap={4} alignItems="start">
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              24×80px
            </Text>
            <Skeleton height="24px" width="80px" />
          </Box>
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              40×120px
            </Text>
            <Skeleton height="40px" width="120px" />
          </Box>
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              56×160px
            </Text>
            <Skeleton height="56px" width="160px" />
          </Box>
        </Box>
      </Box>

      <Box mb={6}>
        <Text mb={2} fontSize="sm">
          Manual Box + Skeleton (testing our approach):
        </Text>
        <Box display="flex" gap={4} alignItems="start">
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              XS: Container 24×80
            </Text>
            <Box
              h="24px"
              w="80px"
              minH="24px"
              minW="80px"
              display="inline-block"
              border="1px dashed green"
            >
              <Skeleton height="100%" width="100%" />
            </Box>
          </Box>
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              MD: Container 40×120
            </Text>
            <Box
              h="40px"
              w="120px"
              minH="40px"
              minW="120px"
              display="inline-block"
              border="1px dashed green"
            >
              <Skeleton height="100%" width="100%" />
            </Box>
          </Box>
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              XL: Container 56×160
            </Text>
            <Box
              h="56px"
              w="160px"
              minH="56px"
              minW="160px"
              display="inline-block"
              border="1px dashed green"
            >
              <Skeleton height="100%" width="100%" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text mb={2} fontSize="sm">
          Reference buttons:
        </Text>
        <Box display="flex" gap={4} alignItems="start">
          <Box border="1px solid purple" p={2}>
            <Text fontSize="xs" mb={1}>
              XS Button
            </Text>
            <Button size="xs">XS</Button>
          </Box>
          <Box border="1px solid purple" p={2}>
            <Text fontSize="xs" mb={1}>
              MD Button
            </Text>
            <Button size="md">MD</Button>
          </Box>
          <Box border="1px solid purple" p={2}>
            <Text fontSize="xs" mb={1}>
              XL Button
            </Text>
            <Button size="xl">XL</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </ChakraWrapper>
);

export default {
  SimpleSkeletonTest,
};
