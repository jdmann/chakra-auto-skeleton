import * as ChakraUI from '@chakra-ui/react';

// Check what Avatar-related components are available
const exports = Object.keys(ChakraUI);
const avatarExports = exports.filter((key) => key.toLowerCase().includes('avatar'));

console.log('Avatar-related exports:', avatarExports);
console.log('All exports count:', exports.length);

// Check for common Avatar component
if (ChakraUI.Avatar) {
  console.log('Avatar component is available');
} else {
  console.log('Avatar component is NOT available');
}
