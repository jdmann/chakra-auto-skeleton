// Test Avatar component structure in Chakra UI v3
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

// Try different import patterns for Avatar
// Pattern 1: Direct import (already tried - doesn't work as JSX)
// Pattern 2: Maybe it's a namespace with subcomponents
// Pattern 3: Maybe it's imported differently

// Let's try importing it and see what it contains
import { Avatar } from '@chakra-ui/react';

console.log('Avatar:', Avatar);
console.log('Avatar type:', typeof Avatar);
console.log('Avatar keys:', Object.keys(Avatar));

// Check if it has Root, Image, Fallback components
if (Avatar && typeof Avatar === 'object') {
  console.log('Avatar.Root:', Avatar.Root);
  console.log('Avatar.Image:', Avatar.Image);
  console.log('Avatar.Fallback:', Avatar.Fallback);
}

// Simple test component
export const AvatarTest = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <h3>Avatar Test</h3>
        {/* Try different patterns */}
        {Avatar && Avatar.Root && (
          <Avatar.Root>
            <Avatar.Image src="https://bit.ly/sage-adebayo" alt="Test" />
            <Avatar.Fallback>SA</Avatar.Fallback>
          </Avatar.Root>
        )}
      </div>
    </ChakraProvider>
  );
};
