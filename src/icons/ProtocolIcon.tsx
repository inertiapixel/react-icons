import React from "react";

export const ProtocolIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65673)">
<path d="M15 6L8 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6L13 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 14V14.015"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 10.0156V10.0306"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65673">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
