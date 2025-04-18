import React from "react";

export const Ruler3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64744)">
<path d="M19.875 8C20.496 8 21 8.512 21 9.143V14.857C21 15.488 20.496 16 19.875 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V9.143C3 8.512 3.504 8 4.125 8H19.875Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 8V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64744">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
