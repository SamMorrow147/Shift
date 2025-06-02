// Configuration for the BackgroundGears component
export const GEAR_CONFIG = {
  // General settings
  opacity: 0.08,
  maxGears: 6,
  
  // Gear size range
  minRadius: 40,
  maxRadius: 100,
  
  // Animation settings
  minRotationSpeed: 0.005,
  maxRotationSpeed: 0.015,
  
  // Colors - HSL values
  colors: {
    hueRange: [200, 260], // Blue to purple range
    saturationRange: [60, 80],
    lightnessRange: [30, 50]
  },
  
  // Mobile settings
  disableOnMobile: true,
  disableOnReducedMotion: true,
  
  // Connection settings
  enableConnections: true,
  maxConnectors: 3,
  connectorSizeRange: [15, 40]
};

export default GEAR_CONFIG; 