import React from "react";

export const LegoOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70725)">
<path d="M9.5 11H9.51"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C9.82588 15.3326 10.2148 15.5968 10.6441 15.7772C11.0734 15.9576 11.5344 16.0505 12 16.0505C12.4656 16.0505 12.9266 15.9576 13.3559 15.7772C13.7852 15.5968 14.1741 15.3326 14.5 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4V3H16V5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V16M19.116 19.127C18.8379 19.4044 18.5079 19.6242 18.1448 19.774C17.7818 19.9238 17.3928 20.0006 17 20V21H7V20C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V8C4 6.917 4.574 5.968 5.435 5.44"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70725">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
