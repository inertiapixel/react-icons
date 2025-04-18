import React from "react";

export const BrandKickIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82054)">
<path d="M4 4H9V8H12V6H14V4H20V8H18V10H16V14H18V16H20V20H14V18H12V16H9V20H4V4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82054">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
