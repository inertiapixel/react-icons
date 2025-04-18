import React from "react";

export const RadiusBottomLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65547)">
<path d="M19 19H13C10.8783 19 8.84344 18.1571 7.34315 16.6569C5.84285 15.1566 5 13.1217 5 11V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65547">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
