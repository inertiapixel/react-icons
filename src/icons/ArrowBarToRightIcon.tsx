import React from "react";

export const ArrowBarToRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85561)">
<path d="M14 12H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12L10 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12L10 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 4V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85561">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
