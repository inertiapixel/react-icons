import React from "react";

export const RadiusTopLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65541)">
<path d="M5 19V13C5 10.8783 5.84285 8.84344 7.34315 7.34315C8.84344 5.84285 10.8783 5 13 5H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65541">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
