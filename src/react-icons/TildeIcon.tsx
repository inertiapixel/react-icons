import React from "react";

export const TildeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61684)">
<path d="M4 12C4 10.343 5.592 9 7.556 9C9.519 9 10.666 10.5 12 12C13.333 13.5 14.48 15 16.444 15C18.408 15 20 13.657 20 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61684">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
