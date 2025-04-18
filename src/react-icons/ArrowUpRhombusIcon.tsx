import React from "react";

export const ArrowUpRhombusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85074)">
<path d="M12 16V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6L12 3L9 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 18.5L12 21L9.5 18.5L12 16L14.5 18.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85074">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
