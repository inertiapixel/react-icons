import React from "react";

export const CurrencyLariIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77272)">
<path d="M18 13C18 11.8133 17.6481 10.6533 16.9888 9.66658C16.3295 8.67989 15.3925 7.91085 14.2961 7.45673C13.1997 7.0026 11.9933 6.88378 10.8295 7.11529C9.66558 7.3468 8.59648 7.91825 7.75736 8.75736C6.91825 9.59648 6.3468 10.6656 6.11529 11.8295C5.88378 12.9933 6.0026 14.1997 6.45673 15.2961C6.91085 16.3925 7.67989 17.3295 8.66658 17.9888C9.65328 18.6481 10.8133 19 12 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 19H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77272">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
