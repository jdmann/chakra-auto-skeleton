# Flex Layout Fix - Technical Summary

## Issue Description

When Button components with flex properties (like `flex="1"`) were wrapped inside Stack or other flex-based containers, the skeleton versions would lose their correct dimensions and layout behavior. The buttons would not expand to fill the available space or maintain the intended flex proportions.

## Root Cause

The overlay strategy was correctly rendering an invisible Button and overlaying a Skeleton, but the flex properties (`flex`, `flexGrow`, `flexShrink`, etc.) were only being applied to the invisible button inside the wrapper, not to the wrapper Box itself.

In flex layouts, the **container** (wrapper Box) needs to participate in the flex layout, not just the content inside it.

## Solution

Updated the button skeleton rendering logic to:

1. **Extract all flex-related and layout props** from the child Button:

   - `flex`, `flexGrow`, `flexShrink`, `flexBasis`
   - `flexDirection`, `alignSelf`, `justifySelf`
   - `gridColumn`, `gridRow`, `order`
   - Width/height constraints (`width`, `height`, `minWidth`, etc.)

2. **Apply these props to the wrapper Box** using the spread operator:

   ```tsx
   <Box
     position="relative"
     display="inline-flex"
     alignItems="center"
     justifyContent="center"
     {...cleanFlexProps}  // <-- This is the key fix
   >
   ```

3. **Clean up undefined values** to avoid passing unnecessary props

## Before vs After

### Before (Broken)

```tsx
<Box position="relative" display="inline-flex">
  <Button flex="1" visibility="hidden">
    Content
  </Button>{' '}
  // flex only on button
  <Skeleton position="absolute" />
</Box>
```

### After (Fixed)

```tsx
<Box
  position="relative"
  display="inline-flex"
  flex="1" // <-- flex applied to wrapper
>
  <Button visibility="hidden">Content</Button>
  <Skeleton position="absolute" />
</Box>
```

## Test Cases Covered

- Horizontal Stack with `flex="1"` buttons
- CSS flex containers with complex flex values
- Vertical Stack with width/alignment properties
- Complex nested layouts
- Explicit width/height constraints
- Individual flex properties (`flexGrow`, `flexShrink`, `flexBasis`)

## Files Modified

- `/src/components/Skeletize.tsx` - Main component fix
- `/src/FlexLayoutTest.stories.tsx` - Comprehensive test suite
- `/src/FlexDebugTest.stories.tsx` - Debug visualization

## Result

✅ Button skeletons now maintain correct dimensions in all flex/Stack layouts
✅ Flex properties are properly inherited and applied
✅ Layout behavior matches real buttons exactly
✅ Both auto and manual modes work correctly

The solution is robust and handles all Chakra UI flex/layout scenarios while maintaining the existing overlay strategy's accuracy for button sizing.
