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

export const ButtonSizeTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={8}>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Button Size Test - Skeleton vs Real
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Each skeleton button should match the real button dimensions exactly.
        </Text>

        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Box key={size} mb={6}>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Size: {size}
            </Text>
            <Stack direction="row" gap={4} alignItems="center">
              <Box>
                <Text fontSize="xs" color="gray.500" mb={1}>
                  Skeleton
                </Text>
                <Skeletize loading={true}>
                  <Button size={size}>Test Button</Button>
                </Skeletize>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.500" mb={1}>
                  Real
                </Text>
                <Button size={size}>Test Button</Button>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Stack>
  </ChakraWrapper>
);
