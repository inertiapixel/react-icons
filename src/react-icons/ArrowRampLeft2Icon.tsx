import React from "react";

export const ArrowRampLeft2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85228)">
<path d="M18 3V11.707"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14L4 10L8 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 21C18 14.925 13.075 10 7 10H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85228">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
