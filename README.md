# @sedonawebservices/skeletize-chakra-ui

> Effortless, zero-flash skeleton loading for Chakra UI v3+ — with auto and manual modes, variant support, and TypeScript safety.

Automatically generate skeleton placeholders for Chakra UI applications. Supports all common Chakra components (Button, Text, Heading, Input, Badge, etc.), preserves layout, and offers both auto and manual skeletonization. No content flash, no layout shift, and full TypeScript support.

---

## ✨ Features

- ⚡ **Zero-Flash Skeletons**: No content flash on load, even for buttons and inputs
- 🎯 **Smart Component Detection**: Auto-detects Chakra UI components (Button, Text, Heading, etc.)
- 🎨 **Variants & Customization**: Pulse, fade, static, and custom color support (via props)
- 🛠 **Manual & Auto Modes**: Use auto-detection or mark elements with `data-skeleton`
- 📦 **TypeScript Support**: Full types for all exports
- 🧩 **Chakra UI v3+ Compatible**: Works with the latest Chakra UI
- ♻️ **Preserves Layout**: No layout shift, keeps your UI structure

---

## 🚀 Installation

```bash
npm install @sedonawebservices/skeletize-chakra-ui
# or
yarn add @sedonawebservices/skeletize-chakra-ui
# or
pnpm add @sedonawebservices/skeletize-chakra-ui
```

---

## 📦 Usage

### Basic Example

```tsx
import { Skeletize } from '@sedonawebservices/skeletize-chakra-ui';
import { Stack, Heading, Text, Button, Input } from '@chakra-ui/react';

function MyComponent() {
  const [loading, setLoading] = useState(true);
  return (
    <Skeletize loading={loading} variant="pulse">
      <Stack gap={4}>
        <Heading size="lg">Dashboard</Heading>
        <Text>Welcome back! Here's your activity.</Text>
        <Input placeholder="Type here..." />
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

### Skeleton Variants

```tsx
<Skeletize loading={loading} variant="fade" skeletonColor="#e2e8f0" skeletonEndColor="#f8fafc">
  <Button>Fade Skeleton</Button>
</Skeletize>
```

---

## 🛠 API Reference

```typescript
interface SkeletizeProps {
  loading: boolean; // Whether to show skeletons
  mode?: 'auto' | 'manual'; // Detection mode (default: 'auto')
  variant?: 'pulse' | 'fade' | 'static' | 'none'; // Skeleton animation variant
  skeletonColor?: string; // Skeleton base color
  skeletonEndColor?: string; // Skeleton highlight color
  children: React.ReactNode; // Components to wrap
}
```

| Prop             | Type                                      | Default   | Description                                                        |
| ---------------- | ----------------------------------------- | --------- | ------------------------------------------------------------------ |
| loading          | `boolean`                                 | -         | Whether to show skeleton placeholders or actual content            |
| mode             | `'auto' \| 'manual'`                      | `'auto'`  | Toggle automatic detection vs manual override with `data-skeleton` |
| variant          | `'pulse' \| 'fade' \| 'static' \| 'none'` | `'pulse'` | Skeleton animation style                                           |
| skeletonColor    | `string`                                  | gray.200  | Skeleton base color                                                |
| skeletonEndColor | `string`                                  | gray.50   | Skeleton highlight color                                           |
| children         | `React.ReactNode`                         | -         | The components to wrap and potentially convert to skeletons        |

---

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

---

## 📄 License

MIT
