import React from "react";

export const CornerRightUpDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77755)">
<path d="M5 19H11C11.7956 19 12.5587 18.6839 13.1213 18.1213C13.6839 17.5587 14 16.7956 14 16V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13L14 9L18 13M10 8L14 4L18 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77755">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
