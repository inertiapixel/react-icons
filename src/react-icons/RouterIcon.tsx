import React from "react";

export const RouterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64796)">
<path d="M3 15C3 14.4696 3.21071 13.9609 3.58579 13.5858C3.96086 13.2107 4.46957 13 5 13H19C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 13V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.75 8.75019C12.1203 8.23403 12.6083 7.81351 13.1734 7.52342C13.7386 7.23334 14.3647 7.08203 15 7.08203C15.6353 7.08203 16.2614 7.23334 16.8266 7.52342C17.3917 7.81351 17.8797 8.23403 18.25 8.75019"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 6.50037C9.24067 5.46807 10.2166 4.62702 11.3469 4.04685C12.4772 3.46667 13.7295 3.16406 15 3.16406C16.2705 3.16406 17.5228 3.46667 18.6531 4.04685C19.7834 4.62702 20.7593 5.46807 21.5 6.50037"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64796">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
