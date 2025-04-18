import React from "react";

export const LogicAndIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69948)">
<path d="M22 12H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5C15 5 17 8.5 17 12C17 15.5 15 19 9 19H7V5H9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69948">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
