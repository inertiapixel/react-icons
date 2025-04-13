import React from "react";

export const MilitaryAwardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68406)">
<path d="M8 13C8 14.0609 8.42143 15.0783 9.17157 15.8284C9.92172 16.5786 10.9391 17 12 17C13.0609 17 14.0783 16.5786 14.8284 15.8284C15.5786 15.0783 16 14.0609 16 13C16 11.9391 15.5786 10.9217 14.8284 10.1716C14.0783 9.42143 13.0609 9 12 9C10.9391 9 9.92172 9.42143 9.17157 10.1716C8.42143 10.9217 8 11.9391 8 13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 10.5L7.5 8H2L4.48 13.788C4.63432 14.148 4.89096 14.4548 5.21805 14.6702C5.54515 14.8857 5.92832 15.0003 6.32 15H8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 10.5L16.5 8H22L19.52 13.788C19.3657 14.148 19.109 14.4548 18.7819 14.6702C18.4548 14.8857 18.0717 15.0003 17.68 15H15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68406">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
