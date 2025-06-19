# @sedonawebservices/skeletize-chakra-ui

Automatically generate skeleton components for Chakra UI applications with enhanced component detection and Chakra UI v3 compatibility.

## ✨ Features

- 🎯 **Smart Component Detection**: Identifies Chakra UI components by both name and props
- 🔄 **Auto & Manual Modes**: Choose between automatic skeleton generation or manual control
- 📱 **TypeScript Support**: Full TypeScript definitions included
- 🎨 **Chakra UI v3 Compatible**: Works with the latest Chakra UI version
- ⚡ **Enhanced Prop Detection**: Robust fallback mechanisms for component identification
- ♻️ **Preserves Layout Structure**: Box, Stack, Flex, etc. maintain their structure
- 🐛 **Reliable Loading States**: Fixed issues with Button and Text component skeleton conversion
- 🎭 **Avatar Support**: Enhanced Avatar component detection with circular element fallbacks

## 🚀 Installation

```bash
npm install @sedonawebservices/skeletize-chakra-ui
# or
yarn add @sedonawebservices/skeletize-chakra-ui
# or
pnpm add @sedonawebservices/skeletize-chakra-ui
```

## 📦 Usage

### Auto Mode (default)

```tsx
import { Skeletize } from '@sedonawebservices/skeletize-chakra-ui';
import { Stack, Heading, Avatar, Text, Image, Button } from '@chakra-ui/react';

function MyComponent() {
  const [loading, setLoading] = useState(true);

  return (
    <Skeletize loading={loading}>
      <Stack spacing={4}>
        <Heading size="lg">Dashboard</Heading>
        <Avatar name="Jane Doe" />
        <Text>Welcome back! Here's your activity.</Text>
        <Image src="/banner.jpg" height="200px" />
        <Button colorScheme="blue">Submit</Button>
      </Stack>
    </Skeletize>
  );
}
```

### Manual Mode

```tsx
<Skeletize loading={loading} mode="manual">
  <Box height="20px" width="80%" data-skeleton />
  <Text>This will not be replaced unless marked</Text>
  <Button data-skeleton>This button will become a skeleton</Button>
</Skeletize>
```

## 🔍 Component Detection

The Skeletize component uses multiple strategies to identify Chakra UI components:

1. **Component Name Detection**: Checks `displayName`, function `name`, and forwardRef patterns
2. **Props-based Detection**: Identifies components by their typical props:
   - **Text components**: `fontSize`, `fontWeight`, `color`, `textAlign` → `SkeletonText`
   - **Button components**: `colorScheme`, `variant`, `onClick`, `size` → `Skeleton` with size-appropriate dimensions
   - **Layout components**: `display`, `flexDirection`, `alignItems`, `gap` → Wraps children

## 📋 Supported Components

- **Text Components**: `Text`, `Heading` → `SkeletonText`
- **Button Components**: `Button` → `Skeleton` with size-aware dimensions (xs: 24×80px, sm: 32×96px, md: 40×120px, lg: 48×140px, xl: 56×160px)
- **Avatar Components**: `Avatar`, circular elements with avatar-like props → `SkeletonCircle`
- **Image Components**: `Image` → `Skeleton`
- **Layout Components**: `Box`, `Stack`, `Flex`, etc. → Wraps children with Skeletize

## 🛠 API Reference

```typescript
interface SkeletizeProps {
  loading: boolean; // Whether to show skeletons
  mode?: 'auto' | 'manual'; // Detection mode (default: 'auto')
  children: React.ReactNode; // Components to wrap
}
```

| Prop     | Type                 | Default  | Description                                                        |
| -------- | -------------------- | -------- | ------------------------------------------------------------------ |
| loading  | `boolean`            | -        | Whether to show skeleton placeholders or actual content            |
| mode     | `'auto' \| 'manual'` | `'auto'` | Toggle automatic detection vs manual override with `data-skeleton` |
| children | `React.ReactNode`    | -        | The components to wrap and potentially convert to skeletons        |

## 🧪 Development

```bash
# Install dependencies
npm install

# Start Ladle development server
npm run ladle

# Build the library
npm run build

# Build Ladle documentation
npm run build-ladle
```

## 📚 Version History

- **v0.2.2**: 🐛 **Bug Fix Release** - Fixed Button and Text component loading states, enhanced component detection reliability
- **v0.2.1**: Enhanced component detection with props-based fallbacks and improved Chakra UI v3 compatibility
- **v0.2.0**: Replaced Storybook with Ladle, improved TypeScript support, scoped package name
- **v0.1.0**: Initial release with basic auto-skeleton functionality

## 📄 License

MIT
