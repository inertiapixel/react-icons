import React from "react";

export const CornerUpRightDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77741)">
<path d="M4 18V12C4 11.2044 4.31607 10.4413 4.87868 9.87868C5.44129 9.31607 6.20435 9 7 9H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13L14 9L10 5M15 13L19 9L15 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77741">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
