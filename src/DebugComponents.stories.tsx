import { Box, Button, ChakraProvider, defaultSystem, Heading, Stack, Text } from '@chakra-ui/react';
import type { Story } from '@ladle/react';
import React from 'react';

// Wrapper component for Chakra UI provider
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={defaultSystem}>
    <Box p={6}>{children}</Box>
  </ChakraProvider>
);

// Debug component to inspect element structure
const InspectElement = ({ children }: { children: React.ReactElement }) => {
  const child = React.Children.only(children);

  const debugInfo = {
    typeName: (child.type as any)?.name || 'unknown',
    displayName: (child.type as any)?.displayName || 'none',
    renderName: (child.type as any)?.render?.name || 'none',
    renderDisplayName: (child.type as any)?.render?.displayName || 'none',
    typeString: child.type?.toString()?.substring(0, 100) || 'unknown',
    hasStringChildren: typeof child.props.children === 'string',
    childrenContent: typeof child.props.children === 'string' ? child.props.children : 'non-string',
    props: Object.keys(child.props || {}).join(', '),
  };

  return (
    <Box>
      {child}
      <Box mt={2} p={2} bg="gray.50" fontSize="xs" fontFamily="mono">
        <Text>
          <strong>Type name:</strong> {debugInfo.typeName}
        </Text>
        <Text>
          <strong>Display name:</strong> {debugInfo.displayName}
        </Text>
        <Text>
          <strong>Render name:</strong> {debugInfo.renderName}
        </Text>
        <Text>
          <strong>Render display name:</strong> {debugInfo.renderDisplayName}
        </Text>
        <Text>
          <strong>Type string:</strong> {debugInfo.typeString}
        </Text>
        <Text>
          <strong>Has string children:</strong> {debugInfo.hasStringChildren ? 'Yes' : 'No'}
        </Text>
        <Text>
          <strong>Children content:</strong> {debugInfo.childrenContent}
        </Text>
        <Text>
          <strong>Props:</strong> {debugInfo.props}
        </Text>
      </Box>
    </Box>
  );
};

export const DebugComponents: Story = () => (
  <ChakraWrapper>
    <Stack gap={8}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Component Structure Debug
        </Text>

        <Stack gap={4}>
          <Box border="1px solid" borderColor="blue.200" p={4} borderRadius="md">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Text Component
            </Text>
            <InspectElement>
              <Text>Sample text</Text>
            </InspectElement>
          </Box>

          <Box border="1px solid" borderColor="green.200" p={4} borderRadius="md">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Heading Component
            </Text>
            <InspectElement>
              <Heading size="md">Sample heading</Heading>
            </InspectElement>
          </Box>

          <Box border="1px solid" borderColor="purple.200" p={4} borderRadius="md">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Button Component
            </Text>
            <InspectElement>
              <Button colorScheme="blue">Sample button</Button>
            </InspectElement>
          </Box>

          <Box border="1px solid" borderColor="orange.200" p={4} borderRadius="md">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Text with Props
            </Text>
            <InspectElement>
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                Styled text
              </Text>
            </InspectElement>
          </Box>

          <Box border="1px solid" borderColor="red.200" p={4} borderRadius="md">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>
              Heading with Props
            </Text>
            <InspectElement>
              <Heading size="lg" color="purple.600">
                Styled heading
              </Heading>
            </InspectElement>
          </Box>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);
