# Overlay Strategy Documentation

## Overview

The **Overlay Strategy** is a revolutionary approach to skeleton loading that provides pixel-perfect skeleton dimensions by rendering the actual component invisibly and overlaying a skeleton on top.

## How It Works

### Traditional "Replace" Strategy

- Replaces components with predefined skeleton dimensions
- Uses hardcoded size mappings (e.g., Button size="lg" → 48px height)
- Can be inaccurate for custom styling, padding, or complex components

### New "Overlay" Strategy

1. **Invisible Render**: Renders the actual component with `visibility: hidden`
2. **Layout Preservation**: The invisible component establishes the correct dimensions
3. **Perfect Overlay**: Places a skeleton with `width: 100%` and `height: 100%` on top
4. **Pixel Perfect**: Results in skeletons that match the exact dimensions of real components

## Usage

```tsx
import { Skeletize } from '@sedonawebservices/skeletize-chakra-ui';

// Traditional replace strategy (default)
<Skeletize loading={true} strategy="replace">
  <Button size="lg">Large Button</Button>
</Skeletize>

// New overlay strategy
<Skeletize loading={true} strategy="overlay">
  <Button size="lg">Large Button</Button>
</Skeletize>
```

## Benefits

### ✅ Perfect Accuracy

- Skeletons match exact component dimensions
- Respects custom padding, margins, and styling
- Works with any component size or custom CSS

### ✅ Framework Agnostic

- No need for component-specific size mappings
- Works with custom components automatically
- Scales to any UI framework

### ✅ Layout Preservation

- Maintains exact spacing and alignment
- Prevents layout shifts during loading
- Preserves complex grid and flex layouts

### ✅ Development Speed

- No need to maintain size mapping tables
- Works with new components automatically
- Reduces skeleton implementation time

## Comparison

| Feature           | Replace Strategy  | Overlay Strategy  |
| ----------------- | ----------------- | ----------------- |
| Accuracy          | Good (predefined) | Perfect (exact)   |
| Custom Components | Manual mapping    | Automatic         |
| Custom Styling    | Limited           | Full support      |
| Maintenance       | High              | Low               |
| Performance       | Faster            | Slightly slower\* |

\*The overlay strategy renders components twice but with minimal performance impact due to hidden rendering.

## Technical Implementation

### Component Structure

```
<Box position="relative">
  <!-- Hidden component for dimensions -->
  <Box visibility="hidden" aria-hidden="true">
    {originalComponent}
  </Box>

  <!-- Skeleton overlay -->
  <Box position="absolute" top={0} left={0} right={0} bottom={0}>
    <Skeleton width="100%" height="100%" />
  </Box>
</Box>
```

### Performance Considerations

- Components are rendered invisibly (no visual cost)
- Hidden components don't trigger expensive operations
- Minimal DOM overhead
- Skeleton animations are hardware accelerated

## Best Practices

### When to Use Overlay Strategy

- ✅ Components with custom dimensions
- ✅ Complex layouts with precise spacing
- ✅ Custom or third-party components
- ✅ When pixel-perfect accuracy is required

### When Replace Strategy Is Fine

- ✅ Simple, standard-sized components
- ✅ Performance-critical applications
- ✅ When slight size differences are acceptable

### Layout Components

Both strategies handle layout components (Box, Stack, Flex) by:

- Preserving the layout structure
- Recursively applying the strategy to children
- Maintaining spacing and alignment

## Examples

### Button Sizes

```tsx
// Overlay perfectly matches any button size
<Skeletize loading={true} strategy="overlay">
  <Button size="xs">Extra Small</Button>
  <Button size="xl" px={8}>
    Extra Large with Padding
  </Button>
  <Button width="300px" height="60px">
    Custom Dimensions
  </Button>
</Skeletize>
```

### Custom Components

```tsx
const CustomCard = ({ children, size }) => (
  <Box p={size === 'lg' ? 8 : 4} border="2px solid" borderRadius="xl">
    {children}
  </Box>
);

// Overlay works automatically with custom components
<Skeletize loading={true} strategy="overlay">
  <CustomCard size="lg">
    <Heading>Custom Component</Heading>
    <Text>This will be skeletonized perfectly</Text>
  </CustomCard>
</Skeletize>;
```

### Complex Layouts

```tsx
<Skeletize loading={true} strategy="overlay">
  <Stack gap={4}>
    <Heading size="xl">Dashboard</Heading>
    <Box display="flex" gap={4}>
      <Button size="sm">Action 1</Button>
      <Button size="lg" px={8}>
        Action 2
      </Button>
    </Box>
  </Stack>
</Skeletize>
```

## Migration Guide

### From Replace to Overlay

1. Simply change the strategy prop:

   ```tsx
   // Before
   <Skeletize loading={true} strategy="replace">

   // After
   <Skeletize loading={true} strategy="overlay">
   ```

2. Remove any custom size handling:

   ```tsx
   // Before - manual size handling
   <Skeletize loading={true}>
     <Button size="lg" width="160px">Large Button</Button>
   </Skeletize>

   // After - automatic perfect sizing
   <Skeletize loading={true} strategy="overlay">
     <Button size="lg">Large Button</Button>
   </Skeletize>
   ```

3. Test complex layouts:
   - The overlay strategy should handle nested components automatically
   - Verify that layout spacing is preserved
   - Check that custom components render correctly

## Future Roadmap

- **Performance Optimization**: Investigate component memoization
- **SSR Support**: Ensure overlay strategy works with server-side rendering
- **Animation Improvements**: Smoother transitions between loading states
- **Framework Expansion**: Adapt overlay strategy for Tailwind, MUI, etc.

---

_The overlay strategy represents the future of intelligent skeleton loading - accurate, automatic, and framework-agnostic._
