import React from "react";

export const MathFunctionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69180)">
<path d="M3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21C7 21 7 17 8 12C9 7 9 3 11 3C11.5304 3 12.0391 3.21071 12.4142 3.58579C12.7893 3.96086 13 4.46957 13 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12L21 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18L21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69180">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
