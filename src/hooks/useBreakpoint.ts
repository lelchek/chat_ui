import { useMediaQuery } from 'react-responsive';

interface Breakpoint {
  isDesktop: boolean;
  isMobile: boolean;
}

export const BREAKPOINT_DESKTOP = 1024;
export const BREAKPOINT_MOBILE = 0;

export const useBreakpoint = (): Breakpoint => ({
  isDesktop: useMediaQuery({ minWidth: BREAKPOINT_DESKTOP }),
  isMobile: useMediaQuery({ minWidth: BREAKPOINT_MOBILE }),
});
