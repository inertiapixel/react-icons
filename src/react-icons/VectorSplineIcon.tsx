import React from "react";

export const VectorSplineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60412)">
<path d="M17 4C17 3.73478 17.1054 3.48043 17.2929 3.29289C17.4804 3.10536 17.7348 3 18 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H18C17.7348 7 17.4804 6.89464 17.2929 6.70711C17.1054 6.51957 17 6.26522 17 6V4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H6C6.26522 17 6.51957 17.1054 6.70711 17.2929C6.89464 17.4804 7 17.7348 7 18V20C7 20.2652 6.89464 20.5196 6.70711 20.7071C6.51957 20.8946 6.26522 21 6 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 5C10.373 5 5 10.373 5 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60412">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
