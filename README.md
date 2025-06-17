# Chakra Auto Skeleton

A flexible, zero-config skeleton generator for Chakra UI components.

## ✨ Features

- 🔍 Auto-detects Chakra components and renders appropriate skeletons
- 🧰 Supports both automatic and manual modes
- ♻️ Preserves layout structure (Box, Stack, Flex, etc.)

## 🚀 Installation

```bash
npm install chakra-auto-skeleton
```

## 📦 Usage

### Auto Mode (default)

```tsx
import { AutoSkeleton } from "chakra-auto-skeleton";

<AutoSkeleton loading={loading}>
  <Stack spacing={4}>
    <Heading>Dashboard</Heading>
    <Avatar name="Jane Doe" />
    <Text>Hello world</Text>
    <Image src="/banner.jpg" height="200px" />
    <Button>Submit</Button>
  </Stack>
</AutoSkeleton>
```

### Manual Mode

```tsx
<AutoSkeleton loading={loading} mode="manual">
  <Box height="20px" width="80%" data-skeleton />
  <Text>This will not be replaced unless marked</Text>
</AutoSkeleton>
```

## 🛠 Options

| Prop     | Type            | Default | Description                                      |
|----------|-----------------|---------|--------------------------------------------------|
| loading  | `boolean`       | `false` | Whether to show skeletons                       |
| mode     | `'auto' | 'manual'` | `'auto'` | Toggle automatic detection vs manual override |

## 📄 License

MIT
