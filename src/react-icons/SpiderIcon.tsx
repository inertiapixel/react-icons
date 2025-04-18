import React from "react";

export const SpiderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63227)">
<path d="M5 4V6L10 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 9.5L4 11H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 19V17L10 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 4V6L14 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 9.5L20 11H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 19V17L14 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 15C8 16.0609 8.42143 17.0783 9.17157 17.8284C9.92172 18.5786 10.9391 19 12 19C13.0609 19 14.0783 18.5786 14.8284 17.8284C15.5786 17.0783 16 16.0609 16 15C16 13.9391 15.5786 12.9217 14.8284 12.1716C14.0783 11.4214 13.0609 11 12 11C10.9391 11 9.92172 11.4214 9.17157 12.1716C8.42143 12.9217 8 13.9391 8 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071 12.5304 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63227">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
