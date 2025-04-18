import React from "react";

export const CornerLeftUpDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77769)">
<path d="M18 19H12C11.2044 19 10.4413 18.6839 9.87868 18.1213C9.31607 17.5587 9 16.7956 9 16V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 13L9 9L5 13M13 8L9 4L5 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77769">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
