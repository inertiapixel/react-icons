import React from "react";

export const TicketIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_61691)">
<path d="M15 5V7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11V13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V10C20.4696 10 19.9609 10.2107 19.5858 10.5858C19.2107 10.9609 19 11.4696 19 12C19 12.5304 19.2107 13.0391 19.5858 13.4142C19.9609 13.7893 20.4696 14 21 14V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V14C3.53043 14 4.03914 13.7893 4.41421 13.4142C4.78929 13.0391 5 12.5304 5 12C5 11.4696 4.78929 10.9609 4.41421 10.5858C4.03914 10.2107 3.53043 10 3 10V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61691">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
