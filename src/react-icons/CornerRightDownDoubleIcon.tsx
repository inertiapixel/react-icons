import React from "react";

export const CornerRightDownDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77762)">
<path d="M5 4H11C11.7956 4 12.5587 4.31607 13.1213 4.87868C13.6839 5.44129 14 6.20435 14 7V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10L14 14L18 10M10 15L14 19L18 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77762">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
