import { Box } from '@chakra-ui/react';
import { ReactNode, useRef } from 'react';
import { useSkeletize, UseSkeletizeOptions } from './useSkeletize';

export type SkeletizeProps = {
  loading: boolean;
  children: ReactNode;
  variant?: string;
  skeletonColor?: string;
  skeletonEndColor?: string;
} & UseSkeletizeOptions;

export function Skeletize({
  loading,
  children,
  mode,
  manualSelector,
  variant,
  skeletonColor,
  skeletonEndColor,
}: SkeletizeProps) {
  const ref = useRef<HTMLDivElement>(null);
  useSkeletize(ref, loading, { mode, manualSelector, variant, skeletonColor, skeletonEndColor });
  return (
    <Box ref={ref} position="relative">
      {children}
    </Box>
  );
}

// For backwards compatibility
export { Skeletize as SkeletonLayout };
