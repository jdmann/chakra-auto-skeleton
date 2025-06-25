import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type SkeletizeProps = {
    loading: boolean;
    children: ReactNode;
    className?: string;
    skeletonClassName?: string;
};
declare function Skeletize({ loading, children, className, skeletonClassName, }: SkeletizeProps): react_jsx_runtime.JSX.Element;

interface UseSkeletizeOptions {
    mode?: 'auto' | 'manual';
    manualSelector?: string;
    variant?: 'pulse' | 'fade' | 'static' | 'none';
    skeletonColor?: string;
    skeletonEndColor?: string;
}
/**
 * useSkeletize
 * Applies skeleton styles to Chakra UI components in a subtree when loading is true.
 * @param ref - React ref to the container element
 * @param loading - Whether to apply skeleton styles
 * @param options - Optional: mode ('auto' | 'manual'), manualSelector (CSS selector), variant, skeletonColor, skeletonEndColor
 */
declare function useSkeletize(ref: React.RefObject<HTMLElement>, loading: boolean, options?: UseSkeletizeOptions): void;

export { Skeletize, type SkeletizeProps, useSkeletize };
