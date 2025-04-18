import React from "react";

export const ArrowsMinimizeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84890)">
<path d="M5 9H9V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 15H9V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21L9 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 9H15V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9L21 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15H15V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84890">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
