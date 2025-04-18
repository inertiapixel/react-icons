import React from "react";

export const UTurnLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60809)">
<path d="M17 20V8.5C17 7.30653 16.5259 6.16193 15.682 5.31802C14.8381 4.47411 13.6935 4 12.5 4C11.3065 4 10.1619 4.47411 9.31802 5.31802C8.47411 6.16193 8 7.30653 8 8.5V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 14L8 17L5 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60809">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
