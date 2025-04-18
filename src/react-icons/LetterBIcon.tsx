import React from "react";

export const LetterBIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70694)">
<path d="M7 20V4H13C14.0609 4 15.0783 4.42143 15.8284 5.17157C16.5786 5.92172 17 6.93913 17 8C17 9.06087 16.5786 10.0783 15.8284 10.8284C15.0783 11.5786 14.0609 12 13 12C14.0609 12 15.0783 12.4214 15.8284 13.1716C16.5786 13.9217 17 14.9391 17 16C17 17.0609 16.5786 18.0783 15.8284 18.8284C15.0783 19.5786 14.0609 20 13 20H7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70694">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
