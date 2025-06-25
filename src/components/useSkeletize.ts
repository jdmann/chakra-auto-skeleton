import { useLayoutEffect } from 'react';

export interface UseSkeletizeOptions {
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
export function useSkeletize(
  ref: React.RefObject<HTMLElement>,
  loading: boolean,
  options: UseSkeletizeOptions = {},
) {
  useLayoutEffect(() => {
    if (!loading || !ref.current) return;
    const {
      mode = 'auto',
      manualSelector = '[data-skeleton]',
      variant = 'fade',
      skeletonColor = '#e2e8f0', // Chakra default: gray.200
      skeletonEndColor = '#f8fafc', // Chakra default: gray.50
    } = options;

    // Debug: log all class names in the subtree
    const allNodes = ref.current.querySelectorAll('*');
    const classSet = new Set<string>();
    allNodes.forEach((el) => {
      el.classList.forEach((cls) => classSet.add(cls));
    });
    // eslint-disable-next-line no-console
    console.log('[Skeletize] Classes found in subtree:', Array.from(classSet));

    let elements: Element[] = [];
    if (mode === 'manual') {
      elements = Array.from(ref.current.querySelectorAll(manualSelector));
    } else {
      // Auto mode: match Chakra classes, p, and native heading tags (h1-h6)
      const autoElements = Array.from(
        ref.current.querySelectorAll(
          '[class*="chakra-"]:not(.chakra-stack), p, h1, h2, h3, h4, h5, h6',
        ),
      );
      // Always include manualSelector matches (e.g., [data-skeleton])
      const manualElements = Array.from(ref.current.querySelectorAll(manualSelector));
      // Merge, avoiding duplicates
      const seen = new Set<Element>();
      elements = [...autoElements, ...manualElements].filter((el) => {
        if (seen.has(el)) return false;
        seen.add(el);
        return true;
      });
    }

    // Animation and background logic
    let background = '';
    let animation = '';
    switch (variant) {
      case 'fade':
        background = skeletonColor;
        animation = 'skeletize-fade 1.2s ease-in-out infinite';
        break;
      case 'static':
        background = skeletonColor;
        animation = '';
        break;
      case 'none':
        background = '';
        animation = '';
        break;
      case 'pulse':
      default:
        background = `linear-gradient(90deg,${skeletonColor} 25%,${skeletonEndColor} 50%,${skeletonColor} 75%)`;
        animation = 'skeletize-pulse 1.2s ease-in-out infinite';
        break;
    }

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      (htmlEl as any).dataset._skeletizeOriginal = htmlEl.getAttribute('style') || '';
      // Hide input placeholder during loading
      if (htmlEl.tagName.toLowerCase() === 'input' && 'placeholder' in htmlEl) {
        (htmlEl as any).dataset._skeletizePlaceholder = (htmlEl as HTMLInputElement).placeholder;
        (htmlEl as HTMLInputElement).placeholder = '';
      }
      // Get computed border radius
      const computedRadius = window.getComputedStyle(htmlEl).borderRadius;
      if (background) htmlEl.style.background = background;
      htmlEl.style.color = 'transparent';
      htmlEl.style.borderRadius = computedRadius;
      htmlEl.style.pointerEvents = 'none';
      htmlEl.style.animation = animation;
      // Special handling for text-like elements
      const tag = htmlEl.tagName.toLowerCase();
      const isTextLike =
        tag === 'p' ||
        tag === 'span' ||
        tag === 'label' ||
        htmlEl.className.includes('chakra-text');
      if (isTextLike) {
        const computedFontSize = parseFloat(window.getComputedStyle(htmlEl).fontSize);
        const elHeight = htmlEl.offsetHeight || computedFontSize * 1.5;
        const barHeight = computedFontSize * 1.15;
        // Calculate the percent of the bar height relative to the element height
        const percent = (barHeight / elHeight) * 100;
        const top = (100 - percent) / 2;
        const bottom = top + percent;
        // Use a linear-gradient with transparent above/below and skeleton color in the center
        let skeletonBar;
        if (variant === 'pulse' || variant === 'fade') {
          skeletonBar = `linear-gradient(180deg, transparent 0%, transparent ${top}%, ${skeletonColor} ${top}%, ${skeletonColor} ${bottom}%, transparent ${bottom}%, transparent 100%)`;
        } else {
          skeletonBar = `linear-gradient(180deg, transparent 0%, transparent ${top}%, ${skeletonColor} ${top}%, ${skeletonColor} ${bottom}%, transparent ${bottom}%, transparent 100%)`;
        }
        htmlEl.style.background = skeletonBar;
        htmlEl.style.backgroundRepeat = 'no-repeat';
        htmlEl.style.backgroundSize = '100% 100%';
        htmlEl.style.borderRadius = computedRadius;
      }
    });

    // Add keyframes for animation (only once)
    if (!document.getElementById('skeletize-keyframes')) {
      const style = document.createElement('style');
      style.id = 'skeletize-keyframes';
      style.innerHTML = `
        @keyframes skeletize-pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        @keyframes skeletize-fade {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    // Cleanup: restore original styles and input placeholders when loading is false
    return () => {
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.setAttribute('style', (htmlEl as any).dataset._skeletizeOriginal || '');
        delete (htmlEl as any).dataset._skeletizeOriginal;
        // Restore input placeholder
        if (
          htmlEl.tagName.toLowerCase() === 'input' &&
          (htmlEl as any).dataset._skeletizePlaceholder !== undefined
        ) {
          (htmlEl as HTMLInputElement).placeholder = (htmlEl as any).dataset._skeletizePlaceholder;
          delete (htmlEl as any).dataset._skeletizePlaceholder;
        }
      });
    };
  }, [loading, ref, options]);
}

// For backwards compatibility
export { useSkeletize as useSkeletonLayout };
