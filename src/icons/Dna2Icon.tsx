import React from "react";

export const Dna2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75243)">
<path d="M17.0002 3V4C16.9902 7.352 15.3202 10.023 11.9922 12.014C8.66419 14.004 15.3282 10.014 12.0002 12C8.67219 13.99 7.00019 16.662 6.99219 20.014V21.014" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.0002 21.014V20.014C16.9902 16.662 15.3202 13.991 11.9922 12C8.66419 10.01 15.3282 14 12.0002 12.014C8.67219 10.023 7.00019 7.352 6.99219 4V3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 4H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 20H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75243">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
