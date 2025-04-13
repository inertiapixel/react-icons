import React from "react";

export const PodiumIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66033)">
<path d="M5 8H19L18.379 10.485C18.2708 10.9177 18.0212 11.3018 17.6697 11.5763C17.3182 11.8508 16.885 11.9999 16.439 12H7.561C7.11501 11.9999 6.68184 11.8508 6.33033 11.5763C5.97882 11.3018 5.72915 10.9177 5.621 10.485L5 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12L9 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12L15 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66033">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
