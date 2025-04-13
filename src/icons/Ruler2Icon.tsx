import React from "react";

export const Ruler2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64752)">
<path d="M17 3L21 7L7 21L3 17L17 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7L14.5 5.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10L11.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13L8.5 11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16L5.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64752">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
