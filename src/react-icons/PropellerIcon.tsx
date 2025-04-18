import React from "react";

export const PropellerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65679)">
<path d="M9 13C9 13.7956 9.31607 14.5587 9.87868 15.1213C10.4413 15.6839 11.2044 16 12 16C12.7956 16 13.5587 15.6839 14.1213 15.1213C14.6839 14.5587 15 13.7956 15 13C15 12.2044 14.6839 11.4413 14.1213 10.8787C13.5587 10.3161 12.7956 10 12 10C11.2044 10 10.4413 10.3161 9.87868 10.8787C9.31607 11.4413 9 12.2044 9 13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1668 10.5C14.8888 8.962 15.3228 7.457 15.4698 5.986C15.6898 4.356 14.7078 3 11.9998 3C9.29181 3 8.30981 4.357 8.52981 5.986C8.67681 7.457 9.11081 8.962 9.83281 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.168 16.752C14.138 18.147 15.225 19.275 16.425 20.138C17.725 21.138 19.392 20.971 20.746 18.626C22.1 16.281 21.416 14.752 19.896 14.128C18.548 13.52 17.028 13.143 15.334 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.6622 13C6.9692 13.143 5.4492 13.52 4.1022 14.128C2.5802 14.751 1.8962 16.281 3.2502 18.626C4.6042 20.971 6.2702 21.143 7.5712 20.138C8.7712 19.275 9.8582 18.147 10.8292 16.752"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65679">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
