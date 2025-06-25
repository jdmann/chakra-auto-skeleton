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

// Component to test and debug Skeletize behavior
const DebugTestItem = ({ children, label }: { children: React.ReactElement; label: string }) => {
  const child = React.Children.only(children);

  return (
    <Box border="1px solid" borderColor="gray.200" p={4} borderRadius="md" mb={4}>
      <Text fontSize="sm" fontWeight="semibold" mb={2}>
        {label}
      </Text>

      <Stack gap={4}>
        <Box>
          <Text fontSize="xs" color="gray.600" mb={1}>
            Original component:
          </Text>
          <Skeletize loading={false}>{child}</Skeletize>
        </Box>

        <Box>
          <Text fontSize="xs" color="gray.600" mb={1}>
            Skeletized (should show skeleton):
          </Text>
          <Skeletize loading={true}>{child}</Skeletize>
        </Box>
      </Stack>
    </Box>
  );
};

export const SkeletizeDebugTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Skeletize Debug Test
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Testing Skeletize component behavior with different Chakra UI components. Check browser
          console for detailed debug logs.
        </Text>

        <DebugTestItem label="Simple Text">
          <Text>Simple text component</Text>
        </DebugTestItem>

        <DebugTestItem label="Text with Props">
          <Text fontSize="lg" fontWeight="bold" color="blue.500">
            Text with styling props
          </Text>
        </DebugTestItem>

        <DebugTestItem label="Simple Heading">
          <Heading size="md">Simple heading component</Heading>
        </DebugTestItem>

        <DebugTestItem label="Heading with Props">
          <Heading size="lg" color="purple.600">
            Heading with styling props
          </Heading>
        </DebugTestItem>

        <DebugTestItem label="Button">
          <Button colorScheme="blue">Button component</Button>
        </DebugTestItem>

        <DebugTestItem label="Button with Size">
          <Button colorScheme="green" size="lg">
            Large button
          </Button>
        </DebugTestItem>
      </Box>
    </Stack>
  </ChakraWrapper>
);
