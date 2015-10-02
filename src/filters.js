export const BLUR = { name: 'blur', unit: 'px' };
export const BRIGHTNESS = { name: 'brightness', unit: '%' };
export const CONTRAST = { name: 'contrast', unit: '%' };
export const GRAYSCALE = { name: 'grayscale', unit: '%' };
export const HUEROTATE = { name: 'hue-rotate', unit: 'deg' };
export const INVERT = { name: 'invert', unit: '%' };
export const OPACITY = { name: 'opacity', unit: '%' };
export const SATURATE = { name: 'saturate', unit: '%' };
export const SEPIA = { name: 'sepia', unit: '%' };

export const filters = [
  BLUR,
  BRIGHTNESS,
  CONTRAST,
  GRAYSCALE,
  HUEROTATE,
  INVERT,
  OPACITY,
  SATURATE,
  SEPIA
];

export const filterNames = filters.map((filter) => filter.name)
