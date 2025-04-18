import React from "react";

export const PilcrowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66351)">
<path d="M13 4V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 4H9.5C8.30653 4 7.16193 4.47411 6.31802 5.31802C5.47411 6.16193 5 7.30653 5 8.5C5 9.69347 5.47411 10.8381 6.31802 11.682C7.16193 12.5259 8.30653 13 9.5 13H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66351">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
