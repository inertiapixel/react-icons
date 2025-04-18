import React from "react";

export const LassoOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70997)">
<path d="M4.028 13.2521C3.371 12.2801 3 11.1741 3 10.0001C3 8.19611 3.878 6.55111 5.319 5.31011M7.809 3.80411C9.1406 3.26673 10.5641 2.99366 12 3.00011C16.97 3.00011 21 6.13411 21 10.0001C21 11.7991 20.127 13.4401 18.693 14.6801M16.19 16.1971C14.8586 16.734 13.4355 17.0068 12 17.0001C10.087 17.0001 8.314 16.5361 6.856 15.7451"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17C5.53043 17 6.03914 16.7893 6.41421 16.4142C6.78929 16.0391 7 15.5304 7 15C7 14.4696 6.78929 13.9609 6.41421 13.5858C6.03914 13.2107 5.53043 13 5 13C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17C5 18.42 5.316 19.805 6 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70997">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
