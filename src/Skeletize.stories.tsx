import {
  Box,
  Button,
  ChakraProvider,
  defaultSystem,
  Heading,
  Skeleton,
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

export const ButtonLayoutTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Button Layout Tests</Heading>

      {/* Vertical Stack (should work fine) */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Vertical Stack (Column):
        </Text>
        <Skeletize loading={true}>
          <Stack direction="column" gap={3}>
            <Button size="lg">Large Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="sm">Small Button</Button>
          </Stack>
        </Skeletize>
      </Box>

      {/* Horizontal Stack (test for height preservation) */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Horizontal Stack (Row):
        </Text>
        <Skeletize loading={true}>
          <Stack direction="row" gap={3}>
            <Button size="lg">Large Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="sm">Small Button</Button>
          </Stack>
        </Skeletize>
      </Box>

      {/* Flex container (another test) */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Flex Container:
        </Text>
        <Skeletize loading={true}>
          <Box display="flex" gap={3}>
            <Button size="lg">Large Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="sm">Small Button</Button>
          </Box>
        </Skeletize>
      </Box>

      {/* Wrap container (for wrapping buttons) */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Wrap Container:
        </Text>
        <Skeletize loading={true}>
          <Wrap gap={3}>
            <Button size="lg">Large Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="xs">Extra Small</Button>
            <Button size="xl">Extra Large</Button>
          </Wrap>
        </Skeletize>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const CSSDebugTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">CSS Debug Test</Heading>

      {/* Show actual button dimensions first */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Actual Buttons (Not Loading):
        </Text>
        <Stack direction="row" gap={3}>
          <Button size="lg" bg="blue.100">
            Large Button
          </Button>
          <Button size="md" bg="green.100">
            Medium Button
          </Button>
          <Button size="sm" bg="red.100">
            Small Button
          </Button>
        </Stack>
      </Box>

      {/* Show skeleton versions */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Skeleton Buttons (Loading):
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>

      {/* Show inline styles for comparison */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Manual Skeleton with Inline Styles:
        </Text>
        <Stack direction="row" gap={3}>
          <Skeleton
            height="48px"
            width="140px"
            minHeight="48px"
            flexShrink={0}
            flex="0 0 auto"
            borderRadius="md"
          />
          <Skeleton
            height="40px"
            width="120px"
            minHeight="40px"
            flexShrink={0}
            flex="0 0 auto"
            borderRadius="md"
          />
          <Skeleton
            height="32px"
            width="96px"
            minHeight="32px"
            flexShrink={0}
            flex="0 0 auto"
            borderRadius="md"
          />
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const FlexDebugTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Flex Debug Test</Heading>

      {/* Test 1: Direct Box with flex properties */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Test 1: Box with flex properties
        </Text>
        <Stack direction="row" gap={3}>
          <Box
            height="48px"
            width="140px"
            bg="gray.200"
            borderRadius="md"
            minHeight="48px"
            flexShrink={0}
            flex="0 0 auto"
          />
          <Box
            height="40px"
            width="120px"
            bg="gray.200"
            borderRadius="md"
            minHeight="40px"
            flexShrink={0}
            flex="0 0 auto"
          />
          <Box
            height="32px"
            width="96px"
            bg="gray.200"
            borderRadius="md"
            minHeight="32px"
            flexShrink={0}
            flex="0 0 auto"
          />
        </Stack>
      </Box>

      {/* Test 2: Direct Skeleton components */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Test 2: Direct Skeleton components
        </Text>
        <Stack direction="row" gap={3}>
          <Skeleton height="48px" width="140px" minHeight="48px" flexShrink={0} flex="0 0 auto" />
          <Skeleton height="40px" width="120px" minHeight="40px" flexShrink={0} flex="0 0 auto" />
          <Skeleton height="32px" width="96px" minHeight="32px" flexShrink={0} flex="0 0 auto" />
        </Stack>
      </Box>

      {/* Test 3: Our Skeletize component */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Test 3: Skeletize component
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const BoxWrapperTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Box Wrapper Test</Heading>

      {/* Test with Box wrapper around Skeleton */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Box-wrapped Skeleton approach:
        </Text>
        <Stack direction="row" gap={3}>
          <Box minHeight="48px" flexShrink={0} flex="0 0 auto">
            <Skeleton height="48px" width="140px" />
          </Box>
          <Box minHeight="40px" flexShrink={0} flex="0 0 auto">
            <Skeleton height="40px" width="120px" />
          </Box>
          <Box minHeight="32px" flexShrink={0} flex="0 0 auto">
            <Skeleton height="32px" width="96px" />
          </Box>
        </Stack>
      </Box>

      {/* Test with our updated Skeletize component */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Updated Skeletize component:
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const MinHeightDebug: Story = () => {
  const [showInspector, setShowInspector] = React.useState(false);

  return (
    <ChakraWrapper>
      <Stack gap={6}>
        <Heading size="lg">MinHeight Debug Test</Heading>

        <Button onClick={() => setShowInspector(!showInspector)}>
          {showInspector ? 'Hide' : 'Show'} CSS Inspector
        </Button>

        {/* Explicit minHeight values for comparison */}
        <Box>
          <Text mb={2} fontWeight="bold">
            Manual Box with explicit minHeight:
          </Text>
          <Stack direction="row" gap={3}>
            <Box
              minHeight="48px"
              height="48px"
              width="140px"
              bg="red.200"
              borderRadius="md"
              flexShrink={0}
              flex="0 0 auto"
              border="2px solid red"
            >
              <Text fontSize="xs" p={1}>
                48px minH
              </Text>
            </Box>
            <Box
              minHeight="40px"
              height="40px"
              width="120px"
              bg="green.200"
              borderRadius="md"
              flexShrink={0}
              flex="0 0 auto"
              border="2px solid green"
            >
              <Text fontSize="xs" p={1}>
                40px minH
              </Text>
            </Box>
            <Box
              minHeight="32px"
              height="32px"
              width="96px"
              bg="blue.200"
              borderRadius="md"
              flexShrink={0}
              flex="0 0 auto"
              border="2px solid blue"
            >
              <Text fontSize="xs" p={1}>
                32px minH
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* Our Skeletize component with debug styling */}
        <Box>
          <Text mb={2} fontWeight="bold">
            Skeletize component (should match above):
          </Text>
          <Stack direction="row" gap={3}>
            <Box border="2px solid red" borderRadius="md">
              <Skeletize loading={true}>
                <Button size="lg">Large Button</Button>
              </Skeletize>
            </Box>
            <Box border="2px solid green" borderRadius="md">
              <Skeletize loading={true}>
                <Button size="md">Medium Button</Button>
              </Skeletize>
            </Box>
            <Box border="2px solid blue" borderRadius="md">
              <Skeletize loading={true}>
                <Button size="sm">Small Button</Button>
              </Skeletize>
            </Box>
          </Stack>
        </Box>

        {showInspector && (
          <Box p={4} bg="gray.50" borderRadius="md">
            <Text fontWeight="bold" mb={2}>
              Instructions:
            </Text>
            <Text fontSize="sm">
              1. Open browser developer tools (F12)
              <br />
              2. Use element inspector to examine the Skeletize components above
              <br />
              3. Check if the Box wrapper has minHeight property applied
              <br />
              4. Compare computed styles with the manual boxes
              <br />
              5. Look for any CSS overrides or conflicting styles
            </Text>
          </Box>
        )}
      </Stack>
    </ChakraWrapper>
  );
};

export const InlineStyleTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Inline Style Test</Heading>

      {/* Test with inline styles to force height */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Box with inline styles (should work):
        </Text>
        <Stack direction="row" gap={3}>
          <Box
            style={{
              minHeight: '48px',
              height: '48px',
              width: '140px',
              flexShrink: 0,
              flex: '0 0 auto',
            }}
            bg="red.100"
            borderRadius="md"
          >
            <Skeleton height="48px" width="140px" />
          </Box>
          <Box
            style={{
              minHeight: '40px',
              height: '40px',
              width: '120px',
              flexShrink: 0,
              flex: '0 0 auto',
            }}
            bg="green.100"
            borderRadius="md"
          >
            <Skeleton height="40px" width="120px" />
          </Box>
          <Box
            style={{
              minHeight: '32px',
              height: '32px',
              width: '96px',
              flexShrink: 0,
              flex: '0 0 auto',
            }}
            bg="blue.100"
            borderRadius="md"
          >
            <Skeleton height="32px" width="96px" />
          </Box>
        </Stack>
      </Box>

      {/* Compare with our component */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Our Skeletize component:
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const HardcodedHeightTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Hardcoded Height Test</Heading>

      {/* Test with hardcoded height values */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Hardcoded Box heights:
        </Text>
        <Stack direction="row" gap={3}>
          <Box
            minH="48px"
            h="48px"
            w="140px"
            flexShrink={0}
            flex="0 0 auto"
            bg="red.100"
            borderRadius="md"
          >
            <Skeleton height="48px" width="140px" />
          </Box>
          <Box
            minH="40px"
            h="40px"
            w="120px"
            flexShrink={0}
            flex="0 0 auto"
            bg="green.100"
            borderRadius="md"
          >
            <Skeleton height="40px" width="120px" />
          </Box>
          <Box
            minH="32px"
            h="32px"
            w="96px"
            flexShrink={0}
            flex="0 0 auto"
            bg="blue.100"
            borderRadius="md"
          >
            <Skeleton height="32px" width="96px" />
          </Box>
        </Stack>
      </Box>

      {/* Test our component */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Our Skeletize component:
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>

      {/* Debug info */}
      <Box p={4} bg="gray.50" borderRadius="md">
        <Text fontWeight="bold" mb={2}>
          Expected dimensions:
        </Text>
        <Text fontSize="sm">
          Large (lg): 48px height × 140px width
          <br />
          Medium (md): 40px height × 120px width
          <br />
          Small (sm): 32px height × 96px width
        </Text>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const ComprehensiveHeightTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={8}>
      <Heading size="lg">Comprehensive Height Comparison</Heading>

      <Text>
        <strong>Instructions:</strong> Open browser dev tools console to see debug logs. All
        horizontal rows should have consistent heights matching the labels.
      </Text>

      {/* Row 1: Actual buttons for reference */}
      <Box>
        <Text mb={3} fontWeight="bold" color="purple.600">
          1. Reference: Actual Buttons (not loading)
        </Text>
        <Stack direction="row" gap={3} align="center">
          <Box>
            <Text fontSize="xs" mb={1}>
              48px × 140px
            </Text>
            <Button size="lg" colorScheme="blue">
              Large Button
            </Button>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              40px × 120px
            </Text>
            <Button size="md" colorScheme="green">
              Medium Button
            </Button>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              32px × 96px
            </Text>
            <Button size="sm" colorScheme="red">
              Small Button
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* Row 2: Manual Box + Skeleton */}
      <Box>
        <Text mb={3} fontWeight="bold" color="blue.600">
          2. Manual: Box wrapper + Skeleton (should work)
        </Text>
        <Stack direction="row" gap={3} align="start">
          <Box>
            <Text fontSize="xs" mb={1}>
              48px × 140px
            </Text>
            <Box
              minH="48px"
              h="48px"
              w="140px"
              flexShrink={0}
              flex="0 0 auto"
              bg="blue.50"
              border="1px solid"
              borderColor="blue.200"
            >
              <Skeleton height="48px" width="140px" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              40px × 120px
            </Text>
            <Box
              minH="40px"
              h="40px"
              w="120px"
              flexShrink={0}
              flex="0 0 auto"
              bg="green.50"
              border="1px solid"
              borderColor="green.200"
            >
              <Skeleton height="40px" width="120px" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              32px × 96px
            </Text>
            <Box
              minH="32px"
              h="32px"
              w="96px"
              flexShrink={0}
              flex="0 0 auto"
              bg="red.50"
              border="1px solid"
              borderColor="red.200"
            >
              <Skeleton height="32px" width="96px" />
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Row 3: Our Skeletize component */}
      <Box>
        <Text mb={3} fontWeight="bold" color="red.600">
          3. Our Skeletize: Button → Skeleton (should match above)
        </Text>
        <Stack direction="row" gap={3} align="start">
          <Box>
            <Text fontSize="xs" mb={1}>
              Should be 48px × 140px
            </Text>
            <Box border="1px solid" borderColor="blue.300" borderRadius="md">
              <Skeletize loading={true}>
                <Button size="lg">Large Button</Button>
              </Skeletize>
            </Box>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              Should be 40px × 120px
            </Text>
            <Box border="1px solid" borderColor="green.300" borderRadius="md">
              <Skeletize loading={true}>
                <Button size="md">Medium Button</Button>
              </Skeletize>
            </Box>
          </Box>
          <Box>
            <Text fontSize="xs" mb={1}>
              Should be 32px × 96px
            </Text>
            <Box border="1px solid" borderColor="red.300" borderRadius="md">
              <Skeletize loading={true}>
                <Button size="sm">Small Button</Button>
              </Skeletize>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Analysis section */}
      <Box p={4} bg="yellow.50" borderRadius="md" border="1px solid" borderColor="yellow.200">
        <Text fontWeight="bold" mb={2}>
          Analysis Instructions:
        </Text>
        <Text fontSize="sm">
          1. Compare the heights of all three rows - they should be identical
          <br />
          2. Check browser console for debug logs showing calculated dimensions
          <br />
          3. Use browser dev tools to inspect the DOM structure of row 3<br />
          4. Look for any CSS overrides or computed style differences
          <br />
          5. If row 2 works but row 3 doesn't, the issue is in our component logic
        </Text>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const SizePropTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Size Prop Issue Test</Heading>

      {/* Test buttons WITHOUT size prop */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Buttons WITHOUT size prop (should work):
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button>No Size Button 1</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button>No Size Button 2</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button>No Size Button 3</Button>
          </Skeletize>
        </Stack>
      </Box>

      {/* Test buttons WITH size prop */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Buttons WITH size prop (currently broken):
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>

      {/* Test individual button sizes to isolate the issue */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Individual button sizes:
        </Text>
        <Stack gap={3}>
          <Box>
            <Text fontSize="sm" mb={1}>
              Large button (size="lg"):
            </Text>
            <Skeletize loading={true}>
              <Button size="lg">Large Button Only</Button>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>
              Medium button (size="md"):
            </Text>
            <Skeletize loading={true}>
              <Button size="md">Medium Button Only</Button>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>
              Small button (size="sm"):
            </Text>
            <Skeletize loading={true}>
              <Button size="sm">Small Button Only</Button>
            </Skeletize>
          </Box>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const SizeComponentTest: Story = () => (
  <ChakraWrapper>
    <Stack gap={6}>
      <Heading size="lg">Size Component Issues Test</Heading>

      {/* Test Headings with size props */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Headings with size props:
        </Text>
        <Stack gap={3}>
          <Box>
            <Text fontSize="sm" mb={1}>
              Heading size="xl":
            </Text>
            <Skeletize loading={true}>
              <Heading size="xl">Extra Large Heading</Heading>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>
              Heading size="lg":
            </Text>
            <Skeletize loading={true}>
              <Heading size="lg">Large Heading</Heading>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>
              Heading size="md":
            </Text>
            <Skeletize loading={true}>
              <Heading size="md">Medium Heading</Heading>
            </Skeletize>
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>
              Heading size="sm":
            </Text>
            <Skeletize loading={true}>
              <Heading size="sm">Small Heading</Heading>
            </Skeletize>
          </Box>
        </Stack>
      </Box>

      {/* Test Buttons with size props (horizontal layout) */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Buttons with size props (horizontal):
        </Text>
        <Stack direction="row" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>

      {/* Test Buttons with size props (vertical layout) */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Buttons with size props (vertical):
        </Text>
        <Stack direction="column" gap={3}>
          <Skeletize loading={true}>
            <Button size="lg">Large Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="md">Medium Button</Button>
          </Skeletize>
          <Skeletize loading={true}>
            <Button size="sm">Small Button</Button>
          </Skeletize>
        </Stack>
      </Box>

      {/* Test components WITHOUT size props for comparison */}
      <Box>
        <Text mb={2} fontWeight="bold">
          Components WITHOUT size props (should work fine):
        </Text>
        <Stack gap={3}>
          <Skeletize loading={true}>
            <Heading>Default Heading</Heading>
          </Skeletize>
          <Stack direction="row" gap={3}>
            <Skeletize loading={true}>
              <Button>Default Button 1</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button>Default Button 2</Button>
            </Skeletize>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </ChakraWrapper>
);

export const ButtonSizeAccuracy: Story = () => (
  <ChakraWrapper>
    <Box>
      <Heading size="md" mb={4}>
        Button Size Accuracy Test
      </Heading>
      <Text mb={4} fontSize="sm" color="gray.600">
        Testing that skeleton dimensions match actual button sizes for different size props.
      </Text>

      <Stack gap={6}>
        <Box>
          <Heading size="sm" mb={2}>
            Loading State (Skeletons)
          </Heading>
          <Wrap gap={4}>
            <Skeletize loading={true}>
              <Button size="xs">Extra Small</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="sm">Small</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="md">Medium</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="lg">Large</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="xl">Extra Large</Button>
            </Skeletize>
          </Wrap>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Actual Buttons (Reference)
          </Heading>
          <Wrap gap={4}>
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Wrap>
        </Box>

        <Box>
          <Heading size="sm" mb={2}>
            Button Variants
          </Heading>
          <Stack gap={2} align="start">
            <Wrap gap={4}>
              <Skeletize loading={true}>
                <Button variant="solid" colorScheme="blue">
                  Solid
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button variant="outline" colorScheme="green">
                  Outline
                </Button>
              </Skeletize>
              <Skeletize loading={true}>
                <Button variant="ghost" colorScheme="red">
                  Ghost
                </Button>
              </Skeletize>
            </Wrap>
            <Text fontSize="xs" color="gray.500">
              Reference:
            </Text>
            <Wrap gap={4}>
              <Button variant="solid" colorScheme="blue">
                Solid
              </Button>
              <Button variant="outline" colorScheme="green">
                Outline
              </Button>
              <Button variant="ghost" colorScheme="red">
                Ghost
              </Button>
            </Wrap>
          </Stack>
        </Box>
      </Stack>
    </Box>
  </ChakraWrapper>
);

export const AllComponentTypes: Story = () => (
  <ChakraWrapper>
    <Box>
      <Heading size="md" mb={4}>
        All Component Types Test
      </Heading>
      <Text mb={6} fontSize="sm" color="gray.600">
        Test different component types to ensure proper skeleton generation.
      </Text>

      <Stack gap={8}>
        <Box>
          <Heading size="sm" mb={4} color="blue.600">
            Button Components
          </Heading>
          <Wrap gap={4}>
            <Skeletize loading={true}>
              <Button size="xs">XS Button</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="sm">Small Button</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="md">Medium Button</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="lg">Large Button</Button>
            </Skeletize>
            <Skeletize loading={true}>
              <Button size="xl">Extra Large</Button>
            </Skeletize>
          </Wrap>
        </Box>

        <Box>
          <Heading size="sm" mb={4} color="green.600">
            Text Components
          </Heading>
          <Stack gap={2} align="start">
            <Skeletize loading={true}>
              <Heading size="sm">Small Heading</Heading>
            </Skeletize>
            <Skeletize loading={true}>
              <Heading size="lg">Large Heading</Heading>
            </Skeletize>
            <Skeletize loading={true}>
              <Text fontSize="sm">Small text content</Text>
            </Skeletize>
            <Skeletize loading={true}>
              <Text fontSize="lg">Large text content</Text>
            </Skeletize>
          </Stack>
        </Box>

        <Box>
          <Heading size="sm" mb={4} color="purple.600">
            Reference (No Loading)
          </Heading>
          <Wrap gap={4} mb={4}>
            <Button size="xs">XS Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
            <Button size="xl">Extra Large</Button>
          </Wrap>
          <Stack gap={2} align="start">
            <Heading size="sm">Small Heading - Real</Heading>
            <Heading size="lg">Large Heading - Real</Heading>
            <Text fontSize="sm">Small text content</Text>
            <Text fontSize="lg">Large text content</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  </ChakraWrapper>
);

export const ComplexLayout: Story = () => (
  <ChakraWrapper>
    <Box>
      <Heading size="md" mb={4}>
        Complex Layout Test
      </Heading>
      <Text mb={6} fontSize="sm" color="gray.600">
        Test complex nested layouts and mixed component types.
      </Text>

      <Skeletize loading={true}>
        <Stack gap={6}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Heading size="lg">Dashboard Header</Heading>
            <Box display="flex" gap={3}>
              <Button size="sm" variant="outline">
                Settings
              </Button>
              <Button size="sm" colorScheme="blue">
                Upgrade
              </Button>
            </Box>
          </Box>

          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
            <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
              <Heading size="sm" mb={2}>
                Total Users
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                12,345
              </Text>
              <Text fontSize="sm" color="green.500">
                +12% from last month
              </Text>
            </Box>

            <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
              <Heading size="sm" mb={2}>
                Revenue
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                $54,321
              </Text>
              <Text fontSize="sm" color="green.500">
                +8% from last month
              </Text>
            </Box>

            <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
              <Heading size="sm" mb={2}>
                Conversion
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                3.2%
              </Text>
              <Text fontSize="sm" color="red.500">
                -2% from last month
              </Text>
            </Box>
          </Box>

          <Box display="flex" gap={6}>
            <Box flex="2">
              <Heading size="md" mb={3}>
                Recent Activity
              </Heading>
              <Stack gap={3}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={3}
                  p={3}
                  bg="gray.50"
                  borderRadius="md"
                >
                  <Box w="40px" h="40px" bg="blue.100" borderRadius="full" />
                  <Box flex="1">
                    <Text fontWeight="medium">John Doe signed up</Text>
                    <Text fontSize="sm" color="gray.500">
                      2 minutes ago
                    </Text>
                  </Box>
                  <Button size="xs" variant="ghost">
                    View
                  </Button>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={3}
                  p={3}
                  bg="gray.50"
                  borderRadius="md"
                >
                  <Box w="40px" h="40px" bg="green.100" borderRadius="full" />
                  <Box flex="1">
                    <Text fontWeight="medium">Payment received</Text>
                    <Text fontSize="sm" color="gray.500">
                      5 minutes ago
                    </Text>
                  </Box>
                  <Button size="xs" variant="ghost">
                    View
                  </Button>
                </Box>
              </Stack>
            </Box>

            <Box flex="1">
              <Heading size="md" mb={3}>
                Quick Actions
              </Heading>
              <Stack gap={2}>
                <Button size="sm" width="100%" variant="outline">
                  Create User
                </Button>
                <Button size="sm" width="100%" variant="outline">
                  Send Email
                </Button>
                <Button size="sm" width="100%" variant="outline">
                  Generate Report
                </Button>
                <Button size="sm" width="100%" colorScheme="blue">
                  View Analytics
                </Button>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Skeletize>
    </Box>
  </ChakraWrapper>
);

export const EdgeCases: Story = () => {
  // Custom component to test edge cases
  const CustomCard = ({
    title,
    children,
    size = 'md',
  }: {
    title: string;
    children: React.ReactNode;
    size?: string;
  }) => (
    <Box
      p={size === 'lg' ? 6 : 4}
      border="2px solid"
      borderColor="blue.200"
      borderRadius="lg"
      bg="blue.50"
      minW={size === 'lg' ? '300px' : '200px'}
    >
      <Heading size={size === 'lg' ? 'md' : 'sm'} color="blue.800" mb={2}>
        {title}
      </Heading>
      <Text color="blue.600">{children}</Text>
    </Box>
  );

  return (
    <ChakraWrapper>
      <Box>
        <Heading size="md" mb={4}>
          Edge Cases Test
        </Heading>
        <Text mb={6} fontSize="sm" color="gray.600">
          Test edge cases like custom components, unusual dimensions, and complex styling.
        </Text>

        <Stack gap={8}>
          <Box>
            <Heading size="sm" mb={3}>
              Custom Components
            </Heading>
            <Wrap gap={4}>
              <Skeletize loading={true}>
                <CustomCard title="Small Card" size="sm">
                  This is a small custom card component.
                </CustomCard>
              </Skeletize>

              <Skeletize loading={true}>
                <CustomCard title="Large Card" size="lg">
                  This is a large custom card component with more content.
                </CustomCard>
              </Skeletize>
            </Wrap>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>
              Buttons with Custom Dimensions
            </Heading>
            <Wrap gap={4}>
              <Skeletize loading={true}>
                <Button width="200px" height="60px" size="lg">
                  Wide Button
                </Button>
              </Skeletize>

              <Skeletize loading={true}>
                <Button width="80px" height="80px" borderRadius="full">
                  ⭐
                </Button>
              </Skeletize>

              <Skeletize loading={true}>
                <Button size="xs" px={8} py={1} fontSize="xs" fontWeight="normal">
                  Extended Padding
                </Button>
              </Skeletize>
            </Wrap>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>
              Text with Custom Styling
            </Heading>
            <Stack gap={3} align="start">
              <Skeletize loading={true}>
                <Text fontSize="3xl" fontWeight="black" color="purple.600" letterSpacing="wide">
                  BOLD ANNOUNCEMENT
                </Text>
              </Skeletize>

              <Skeletize loading={true}>
                <Text
                  fontSize="sm"
                  fontStyle="italic"
                  color="gray.500"
                  maxW="300px"
                  lineHeight="tall"
                >
                  This is a longer piece of text with custom styling. It has italic styling and
                  specific line height.
                </Text>
              </Skeletize>
            </Stack>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>
              Reference (No Loading)
            </Heading>
            <Text fontSize="xs" color="gray.500" mb={3}>
              These are the actual components for comparison:
            </Text>
            <Stack gap={4}>
              <Wrap gap={4}>
                <CustomCard title="Small Card" size="sm">
                  This is a small custom card component.
                </CustomCard>

                <CustomCard title="Large Card" size="lg">
                  This is a large custom card component with more content.
                </CustomCard>
              </Wrap>

              <Wrap gap={4}>
                <Button width="200px" height="60px" size="lg">
                  Wide Button
                </Button>

                <Button width="80px" height="80px" borderRadius="full">
                  ⭐
                </Button>

                <Button size="xs" px={8} py={1} fontSize="xs" fontWeight="normal">
                  Extended Padding
                </Button>
              </Wrap>

              <Stack gap={3} align="start">
                <Text fontSize="3xl" fontWeight="black" color="purple.600" letterSpacing="wide">
                  BOLD ANNOUNCEMENT
                </Text>

                <Text
                  fontSize="sm"
                  fontStyle="italic"
                  color="gray.500"
                  maxW="300px"
                  lineHeight="tall"
                >
                  This is a longer piece of text with custom styling. It has italic styling and
                  specific line height.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </ChakraWrapper>
  );
};
