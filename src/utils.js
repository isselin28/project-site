export const size = { desktop: 960 };

export const device = {
  desktop: `(min-width: ${size.desktop}px)`,
};

export function isMobileDevice() {
  return window.innerWidth <= size.desktop;
}
