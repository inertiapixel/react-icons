import React from "react";

export const HdrIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72361)">
<path d="M3 16V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8V16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8H10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12H19C19.5304 12 20.0391 11.7893 20.4142 11.4142C20.7893 11.0391 21 10.5304 21 10C21 9.46957 20.7893 8.96086 20.4142 8.58579C20.0391 8.21071 19.5304 8 19 8H17V16M21 16L18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72361">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
