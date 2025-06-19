import { Box, Button, ChakraProvider, defaultSystem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AutoSkeleton } from './src/components/AutoSkeleton';

const TestApp = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Toggle loading state every 3 seconds for testing
    const interval = setInterval(() => {
      setLoading((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ChakraProvider value={defaultSystem}>
      <Box p={6}>
        <Box mb={4}>
          <button
            onClick={() => setLoading(!loading)}
            style={{ padding: '8px 16px', marginBottom: '20px' }}
          >
            Toggle Loading: {loading ? 'ON' : 'OFF'}
          </button>
        </Box>

        <AutoSkeleton loading={loading}>
          <Heading size="lg" mb={4}>
            Dashboard Title
          </Heading>
          <Text mb={2}>This is some text content that should become a skeleton.</Text>
          <Button colorScheme="blue" mr={3}>
            Primary Button
          </Button>
          <Button variant="outline">Secondary Button</Button>

          <Box mt={4}>
            <Text fontSize="sm" color="gray.500">
              Small text with different styling
            </Text>
          </Box>
        </AutoSkeleton>
      </Box>
    </ChakraProvider>
  );
};

export default TestApp;
