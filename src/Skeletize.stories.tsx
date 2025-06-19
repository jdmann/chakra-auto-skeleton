import {
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Heading,
  Stack,
  Text,
  Wrap,
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

export const SimpleTest: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={true}>
      <Text>Simple text component</Text>
      <Button>Simple button</Button>
      <Heading>Simple heading</Heading>
    </Skeletize>
  </ChakraWrapper>
);

export const Loading: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={true}>
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
    </Skeletize>
  </ChakraWrapper>
);

export const NotLoading: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={false}>
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
    </Skeletize>
  </ChakraWrapper>
);

export const ManualMode: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={true} mode="manual">
      <Stack gap={4}>
        <Heading size="lg">Manual Skeleton Mode</Heading>
        <Text data-skeleton>This text will become a skeleton</Text>
        <Text>This text will remain unchanged</Text>
        <Box data-skeleton height="100px" width="300px" bg="gray.100" />
        <Button>This button will remain unchanged</Button>
        <Button data-skeleton>This button will become a skeleton</Button>
      </Stack>
    </Skeletize>
  </ChakraWrapper>
);

export const TextComponents: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={true}>
      <Stack gap={4}>
        <Heading size="xl">Main Title</Heading>
        <Heading size="lg">Section Title</Heading>
        <Heading size="md">Subsection Title</Heading>
        <Text fontSize="lg">Large body text content here</Text>
        <Text fontSize="md">Regular body text content here</Text>
        <Text fontSize="sm">Small body text content here</Text>
      </Stack>
    </Skeletize>
  </ChakraWrapper>
);

export const ButtonsOnly: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={true}>
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
    </Skeletize>
  </ChakraWrapper>
);

export const AllComponents: Story = () => (
  <ChakraWrapper>
    <Skeletize loading={true}>
      <Stack gap={4}>
        <Heading size="lg">All Component Types Test</Heading>

        {/* Text Components */}
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Large Bold Text
          </Text>
          <Text fontSize="md">Regular Text</Text>
          <Text fontSize="sm" color="gray.500">
            Small Gray Text
          </Text>
          <Heading size="md">Medium Heading</Heading>
        </Box>

        {/* Button Components */}
        <Stack direction="row" gap={3}>
          <Button colorScheme="blue">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button size="sm">Small Button</Button>
        </Stack>
      </Stack>
    </Skeletize>
  </ChakraWrapper>
);

export const DebugText: Story = () => (
  <ChakraWrapper>
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <h3>Debug: Text Component Detection Test</h3>
        <p>Check browser console for debug output</p>
      </div>

      <div>
        <h4>Loading State (should show SkeletonText):</h4>
        <Skeletize loading={true}>
          <Text>Plain Text</Text>
          <Text fontSize="lg">Large Text</Text>
          <Text fontWeight="bold">Bold Text</Text>
          <Text color="blue.500">Colored Text</Text>
          <Heading size="md">Medium Heading</Heading>
          <Heading size="lg">Large Heading</Heading>
        </Skeletize>
      </div>

      <div>
        <h4>Not Loading State (should show actual text):</h4>
        <Skeletize loading={false}>
          <Text>Plain Text</Text>
          <Text fontSize="lg">Large Text</Text>
          <Text fontWeight="bold">Bold Text</Text>
          <Text color="blue.500">Colored Text</Text>
          <Heading size="md">Medium Heading</Heading>
          <Heading size="lg">Large Heading</Heading>
        </Skeletize>
      </div>
    </div>
  </ChakraWrapper>
);

export const DebugButtons: Story = () => (
  <ChakraWrapper>
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <h3>Debug: Button Detection Test</h3>
        <p>Check browser console for debug output</p>
      </div>

      <div>
        <h4>Loading State (should show skeletons):</h4>
        <Skeletize loading={true}>
          <Stack gap={3}>
            <Button>Plain Button</Button>
            <Button colorScheme="blue">Blue Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button size="lg">Large Button</Button>
          </Stack>
        </Skeletize>
      </div>

      <div>
        <h4>Not Loading State (should show actual buttons):</h4>
        <Skeletize loading={false}>
          <Wrap gap={3}>
            <Button>Plain Button</Button>
            <Button colorScheme="blue">Blue Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button size="lg">Large Button</Button>
          </Wrap>
        </Skeletize>
      </div>
    </div>
  </ChakraWrapper>
);

export const ComponentFixTest: Story = () => (
  <ChakraWrapper>
    <div style={{ display: 'grid', gap: '30px' }}>
      <div>
        <h2>🐛 Bug Fix Verification</h2>
        <p>Testing the specific issues mentioned:</p>
        <ul>
          <li>✅ Button loading state should work</li>
          <li>🔄 Text components should convert to SkeletonText</li>
          <li>✅ Avatar-like components (enhanced detection for circular elements)</li>
        </ul>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h3>Loading State Test</h3>
        <Skeletize loading={true}>
          <Stack gap={4}>
            <Heading size="lg">This heading should become SkeletonText</Heading>
            <Text fontSize="md">This text should become SkeletonText</Text>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Styled text should become SkeletonText
            </Text>
            <Button colorScheme="blue" size="md">
              This button should become a skeleton
            </Button>
            <Button variant="outline" size="lg">
              Large outline button should become skeleton
            </Button>
          </Stack>
        </Skeletize>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h3>Not Loading State (Control)</h3>
        <Skeletize loading={false}>
          <Stack gap={4}>
            <Heading size="lg">This heading should show normally</Heading>
            <Text fontSize="md">This text should show normally</Text>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Styled text should show normally
            </Text>
            <Button colorScheme="blue" size="md">
              This button should show normally
            </Button>
            <Button variant="outline" size="lg">
              Large outline button should show normally
            </Button>
          </Stack>
        </Skeletize>
      </div>
    </div>
  </ChakraWrapper>
);

export const ButtonSizesTest: Story = () => (
  <ChakraWrapper>
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <h3>Button Sizes Test</h3>
        <p>Testing that button skeletons maintain appropriate dimensions for each size</p>
      </div>

      <div>
        <h4>Loading State (should show sized skeletons):</h4>
        <Skeletize loading={true}>
          <Stack gap={3}>
            <Button size="xs" colorScheme="blue">
              Extra Small Button
            </Button>
            <Button size="sm" colorScheme="green">
              Small Button
            </Button>
            <Button size="md" colorScheme="purple">
              Medium Button (default)
            </Button>
            <Button size="lg" colorScheme="orange">
              Large Button
            </Button>
            <Button size="xl" colorScheme="red">
              Extra Large Button
            </Button>
          </Stack>
        </Skeletize>
      </div>

      <div>
        <h4>Not Loading State (for comparison):</h4>
        <Skeletize loading={false}>
          <Stack gap={3}>
            <Button size="xs" colorScheme="blue">
              Extra Small Button
            </Button>
            <Button size="sm" colorScheme="green">
              Small Button
            </Button>
            <Button size="md" colorScheme="purple">
              Medium Button (default)
            </Button>
            <Button size="lg" colorScheme="orange">
              Large Button
            </Button>
            <Button size="xl" colorScheme="red">
              Extra Large Button
            </Button>
          </Stack>
        </Skeletize>
      </div>
    </div>
  </ChakraWrapper>
);

export const ButtonSizeTest: Story = () => (
  <ChakraWrapper>
    <div style={{ display: 'grid', gap: '30px' }}>
      <div>
        <h3>🔍 Button Size Testing</h3>
        <p>Testing that different button sizes create different skeleton dimensions</p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h4>Loading State (should show different sized skeletons):</h4>
        <Skeletize loading={true}>
          <Stack direction="row" gap={3} align="start">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Stack>
        </Skeletize>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h4>Not Loading State (should show actual buttons):</h4>
        <Skeletize loading={false}>
          <Stack direction="row" gap={3} align="start">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Stack>
        </Skeletize>
      </div>
    </div>
  </ChakraWrapper>
);

export const DebugButtonDetection: Story = () => (
  <ChakraWrapper>
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <h3>🐛 Debug: Button Detection</h3>
        <p>Check browser console for debug output</p>
      </div>

      <div>
        <h4>Single Button Test:</h4>
        <Skeletize loading={true}>
          <Button>Test Button</Button>
        </Skeletize>
      </div>

      <div>
        <h4>Button with Size:</h4>
        <Skeletize loading={true}>
          <Button size="lg">Large Button</Button>
        </Skeletize>
      </div>

      <div>
        <h4>Button with Props:</h4>
        <Skeletize loading={true}>
          <Button colorScheme="blue" size="md">
            Blue Medium Button
          </Button>
        </Skeletize>
      </div>
    </div>
  </ChakraWrapper>
);

export const ButtonDebugTest: Story = () => {
  const [logs, setLogs] = React.useState<string[]>([]);

  // Capture console logs
  React.useEffect(() => {
    const originalLog = console.log;
    console.log = (...args) => {
      originalLog(...args);
      const message = args
        .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)))
        .join(' ');
      setLogs((prev) => [...prev.slice(-10), message]); // Keep last 10 logs
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  return (
    <ChakraWrapper>
      <div style={{ display: 'grid', gap: '20px' }}>
        <div>
          <h3>🔴 Button Debug Test</h3>
          <p>Testing why buttons are not visible in ButtonsOnly story</p>
        </div>

        <div style={{ border: '1px solid red', padding: '20px' }}>
          <h4>Loading State (should show button skeletons):</h4>
          <Skeletize loading={true}>
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
          </Skeletize>
        </div>

        <div style={{ border: '1px solid green', padding: '20px' }}>
          <h4>Not Loading State (should show actual buttons):</h4>
          <Skeletize loading={false}>
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
          </Skeletize>
        </div>

        <div
          style={{
            border: '1px solid blue',
            padding: '20px',
            maxHeight: '300px',
            overflow: 'auto',
          }}
        >
          <h4>Debug Console Output:</h4>
          <pre style={{ fontSize: '10px', whiteSpace: 'pre-wrap' }}>{logs.join('\n')}</pre>
        </div>
      </div>
    </ChakraWrapper>
  );
};
