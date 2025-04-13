import React from "react";

export const TimelineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61517)">
<path d="M4 16L10 9L15 14L20 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14C14 14.2652 14.1054 14.5196 14.2929 14.7071C14.4804 14.8946 14.7348 15 15 15C15.2652 15 15.5196 14.8946 15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13C14.7348 13 14.4804 13.1054 14.2929 13.2929C14.1054 13.4804 14 13.7348 14 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9C9 9.26522 9.10536 9.51957 9.29289 9.70711C9.48043 9.89464 9.73478 10 10 10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8C9.73478 8 9.48043 8.10536 9.29289 8.29289C9.10536 8.48043 9 8.73478 9 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16C3 16.2652 3.10536 16.5196 3.29289 16.7071C3.48043 16.8946 3.73478 17 4 17C4.26522 17 4.51957 16.8946 4.70711 16.7071C4.89464 16.5196 5 16.2652 5 16C5 15.7348 4.89464 15.4804 4.70711 15.2929C4.51957 15.1054 4.26522 15 4 15C3.73478 15 3.48043 15.1054 3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8C19 8.26522 19.1054 8.51957 19.2929 8.70711C19.4804 8.89464 19.7348 9 20 9C20.2652 9 20.5196 8.89464 20.7071 8.70711C20.8946 8.51957 21 8.26522 21 8C21 7.73478 20.8946 7.48043 20.7071 7.29289C20.5196 7.10536 20.2652 7 20 7C19.7348 7 19.4804 7.10536 19.2929 7.29289C19.1054 7.48043 19 7.73478 19 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61517">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
