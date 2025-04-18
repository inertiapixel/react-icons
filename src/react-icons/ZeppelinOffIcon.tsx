import React from "react";

export const ZeppelinOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59449)">
<path d="M15.773 15.783C15.05 15.924 14.287 16 13.5 16C11.37 16 8.916 15.074 6.136 13.223L4 15V11.67C3.31772 11.1323 2.65079 10.5754 2 10C2.65079 9.42459 3.31772 8.8677 4 8.33V5L6.135 6.778C6.265 6.691 6.396 6.606 6.525 6.522M9.089 5.102C10.69 4.367 12.16 4 13.5 4C18.194 4 22 6.686 22 10C22 11.919 20.724 13.627 18.739 14.725"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5V20H16V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59449">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
