import { RefObject } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 * @param ref - React ref of the element to watch
 * @param handler - Function to run when a click is detected outside
 */
declare function useClickOutside(ref: RefObject<HTMLElement | null>, handler: (event: MouseEvent | TouchEvent) => void): void;

export { useClickOutside };
