import React from "react";

export const LanguageHiraganaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71024)">
<path d="M4 5H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 4C7 8.846 7 11 7.5 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8.5C10 10.786 8 13 6.5 13C5 13 4 11.865 4 11C4 9 5 8 7 8C9 8 12 8.57 12 10.857C12 12.381 11.333 13.428 10 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20L16 11L20 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0984 18H12.8984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71024">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
