import React from "react";

export const DashboardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77040)">
<path d="M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.4492 11.55L15.4992 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.4 19.9987C4.93815 18.8368 3.87391 17.2489 3.35478 15.4552C2.83564 13.6614 2.88732 11.7506 3.50265 9.9875C4.11797 8.22442 5.26647 6.6964 6.78899 5.61519C8.3115 4.53398 10.1326 3.95313 12 3.95312C13.8674 3.95313 15.6885 4.53398 17.211 5.61519C18.7335 6.6964 19.882 8.22442 20.4974 9.9875C21.1127 11.7506 21.1644 13.6614 20.6452 15.4552C20.1261 17.2489 19.0619 18.8368 17.6 19.9987H6.4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77040">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
