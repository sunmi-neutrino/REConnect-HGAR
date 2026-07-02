import svgPaths from "../../imports/Container/svg-a1zoazzj0s";

// Reconstructed from the Figma Layer_1 import (107.822 × 25.877 px canvas)
// Inset percentages converted to absolute x/y positions
export function HGARLogoWhite({ height = 22 }: { height?: number }) {
  const W = 107.822;
  const H = 25.877;
  const scale = height / H;

  return (
    <svg
      width={W * scale}
      height={height}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular seal mark — inset: 0, right=75.55%, bottom=2.78%, left=0 */}
      <g transform="translate(0, 0)">
        <path d={svgPaths.p1213c000} fill="white" transform="scale(1)" />
      </g>

      {/* Lower seal ring detail — inset: top=58.59%, right=75.62%, bottom=2.86%, left=16.38% */}
      <g transform="translate(17.66, 15.16)">
        <path d={svgPaths.p22bd55b0} fill="white" />
      </g>

      {/* Tiny base detail — inset: top=79.17%, right=85.84%, bottom=0, left=10.73% */}
      <g transform="translate(11.57, 20.49)">
        <path d={svgPaths.pafb1100} fill="white" />
      </g>

      {/* H — inset: top=11.99%, right=54.49%, bottom=14.43%, left=30.22% */}
      <g transform="translate(32.58, 3.10)">
        <path d={svgPaths.p2390de80} fill="white" />
      </g>

      {/* G — inset: top=10.72%, right=35.33%, bottom=13.16%, left=47.45% */}
      <g transform="translate(51.16, 2.77)">
        <path d={svgPaths.p2cd8db00} fill="white" />
      </g>

      {/* A — inset: top=11.47%, right=16.25%, bottom=14.43%, left=65.63% */}
      <g transform="translate(70.76, 2.97)">
        <path d={svgPaths.p334b2f72} fill="white" />
      </g>

      {/* R — inset: top=11.99%, right=0, bottom=14.43%, left=85.28% */}
      <g transform="translate(91.95, 3.10)">
        <path d={svgPaths.p4229180} fill="white" />
      </g>
    </svg>
  );
}
