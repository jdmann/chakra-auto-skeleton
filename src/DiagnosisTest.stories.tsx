import {
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Heading,
  Skeleton,
  Stack,
  Text,
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

export const DiagnosisTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Box>
        <Heading size="md" mb={4}>
          🔍 Button Size Diagnosis
        </Heading>
        <Text mb={4} fontSize="sm" color="gray.600">
          Testing button skeleton dimensions to diagnose the sizing issue.
        </Text>
      </Box>

      <Box>
        <Heading size="sm" mb={2}>
          Loading State (Skeletons)
        </Heading>
        <Stack direction="row" gap={4} align="start" wrap="wrap">
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              XS Button
            </Text>
            <Skeletize loading={true}>
              <Button size="xs">XS</Button>
            </Skeletize>
          </Box>
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              SM Button
            </Text>
            <Skeletize loading={true}>
              <Button size="sm">SM</Button>
            </Skeletize>
          </Box>
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              MD Button
            </Text>
            <Skeletize loading={true}>
              <Button size="md">MD</Button>
            </Skeletize>
          </Box>
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              LG Button
            </Text>
            <Skeletize loading={true}>
              <Button size="lg">LG</Button>
            </Skeletize>
          </Box>
          <Box border="1px solid red" p={2}>
            <Text fontSize="xs" mb={1}>
              XL Button
            </Text>
            <Skeletize loading={true}>
              <Button size="xl">XL</Button>
            </Skeletize>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Heading size="sm" mb={2}>
          Reference Buttons (Actual)
        </Heading>
        <Stack direction="row" gap={4} align="start" wrap="wrap">
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              XS Button
            </Text>
            <Button size="xs">XS</Button>
          </Box>
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              SM Button
            </Text>
            <Button size="sm">SM</Button>
          </Box>
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              MD Button
            </Text>
            <Button size="md">MD</Button>
          </Box>
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              LG Button
            </Text>
            <Button size="lg">LG</Button>
          </Box>
          <Box border="1px solid blue" p={2}>
            <Text fontSize="xs" mb={1}>
              XL Button
            </Text>
            <Button size="xl">XL</Button>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Heading size="sm" mb={2}>
          Manual Skeleton Test
        </Heading>
        <Text fontSize="xs" color="gray.500" mb={2}>
          Direct Skeleton components with our calculated dimensions:
        </Text>
        <Stack direction="row" gap={4} align="start" wrap="wrap">
          <Box border="1px solid green" p={2}>
            <Text fontSize="xs" mb={1}>
              XS: 24×80px
            </Text>
            <Skeleton height="24px" width="80px" />
          </Box>
          <Box border="1px solid green" p={2}>
            <Text fontSize="xs" mb={1}>
              SM: 32×96px
            </Text>
            <Skeleton height="32px" width="96px" />
          </Box>
          <Box border="1px solid green" p={2}>
            <Text fontSize="xs" mb={1}>
              MD: 40×120px
            </Text>
            <Skeleton height="40px" width="120px" />
          </Box>
          <Box border="1px solid green" p={2}>
            <Text fontSize="xs" mb={1}>
              LG: 48×140px
            </Text>
            <Skeleton height="48px" width="140px" />
          </Box>
          <Box border="1px solid green" p={2}>
            <Text fontSize="xs" mb={1}>
              XL: 56×160px
            </Text>
            <Skeleton height="56px" width="160px" />
          </Box>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export default {
  DiagnosisTest,
};
