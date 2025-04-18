import React from "react";

export const BuildingCircusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80813)">
<path d="M4 11H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6.5C12 7.5 7 11 4 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6.5C12 7.5 17 11 20 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 11C5.667 16.333 5 19.667 4 21H8C9 21 12 17 12 12V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 11C18.333 16.333 19 19.667 20 21H16C15 21 12 17 12 12V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V3L14 4H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80813">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
