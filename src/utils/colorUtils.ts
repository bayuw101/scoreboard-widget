export function hexToRgba(hex: string = "#26213E", alpha: number = 1): string {
    // Validate the hex color format
    if (!/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(hex)) {
      throw new Error("Invalid hex color format. Expected '#RRGGBB' or '#RGB'.");
    }
  
    // Expand shorthand hex (e.g., #123 -> #112233)
    if (hex.length === 4) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
  
    // Parse the hex color into RGB components
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    // Return the RGBA string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }