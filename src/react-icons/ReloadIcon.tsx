import React from "react";

export const ReloadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65272)">
<path d="M19.9321 13.0397C19.7433 14.4797 19.166 15.841 18.2622 16.9779C17.3585 18.1147 16.1623 18.9841 14.802 19.4927C13.4418 20.0014 11.9687 20.1302 10.5407 19.8653C9.11282 19.6004 7.78395 18.9518 6.69664 17.989C5.60933 17.0263 4.8046 15.7857 4.36876 14.4004C3.93292 13.015 3.8824 11.5372 4.22264 10.1253C4.56287 8.71342 5.28102 7.4208 6.30006 6.38606C7.3191 5.35132 8.60059 4.61349 10.0071 4.2517C13.9061 3.2517 17.9421 5.2587 19.4321 8.9987"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 4V9H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65272">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
