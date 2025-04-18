import React from "react";

export const BuildingPavilionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80734)">
<path d="M3 21H10V18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18V21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 21V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12H18C18.7956 12 19.5587 11.6839 20.1213 11.1213C20.6839 10.5587 21 9.79565 21 9C18.9562 9.05748 16.9513 8.49459 15.3154 7.404C13.6795 6.31342 12.5102 4.76016 12 3C11.4898 4.76016 10.3205 6.31342 8.68463 7.404C7.04875 8.49459 5.04383 9.05748 3 9C3 9.79565 3.31607 10.5587 3.87868 11.1213C4.44129 11.6839 5.20435 12 6 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80734">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
