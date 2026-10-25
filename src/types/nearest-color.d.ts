// nearest-color ships no types; this covers the part moebius uses
declare module 'nearest-color' {
  const nearestColor: {
    /** Match against named colors: each match has the name, hex and RGB */
    from(colors: Record<string, string>): (color: string) => {
      name: string;
      value: string;
      rgb: { r: number; g: number; b: number };
      distance: number;
    };
    /** Match against unnamed colors: each match is the nearest hex */
    from(colors: string[]): (color: string) => string;
  };

  export default nearestColor;
}
