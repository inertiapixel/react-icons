import React from "react";

export const DevicesExclamationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75569)">
<path d="M15 20H14C13.7348 20 13.4804 19.8946 13.2929 19.7071C13.1054 19.5196 13 19.2652 13 19V9C13 8.73478 13.1054 8.48043 13.2929 8.29289C13.4804 8.10536 13.7348 8 14 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V12.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 8V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 9H18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75569">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
