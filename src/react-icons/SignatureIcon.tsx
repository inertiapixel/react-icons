import React from "react";

export const SignatureIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63621)">
<path d="M3 17C6.333 13.667 8 11 8 9C8 6 7 6 6 6C5 6 3.968 7.085 4 9C4.034 11.048 5.658 13.877 6.5 15C8 17 9 17.5 10 16L12 13C12.333 15.667 13.333 17 15 17C15.53 17 17.639 15 18 15C18.517 15 19.517 15.667 21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63621">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
