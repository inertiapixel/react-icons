import React from "react";

export const DatabaseSmileIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76935)">
<path d="M10 14H10.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14H14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17C10.5869 17.4087 11.2849 17.6277 12 17.6277C12.7151 17.6277 13.4131 17.4087 14 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6C4 7.657 7.582 9 12 9C16.418 9 20 7.657 20 6C20 4.343 16.418 3 12 3C7.582 3 4 4.343 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V18C4 19.657 7.582 21 12 21C16.418 21 20 19.657 20 18V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76935">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
