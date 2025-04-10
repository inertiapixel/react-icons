import React from "react";

export const GasStationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_73040)">
<path d="M14 11H15C15.5304 11 16.0391 11.2107 16.4142 11.5858C16.7893 11.9609 17 12.4696 17 13V16C17 16.3978 17.158 16.7794 17.4393 17.0607C17.7206 17.342 18.1022 17.5 18.5 17.5C18.8978 17.5 19.2794 17.342 19.5607 17.0607C19.842 16.7794 20 16.3978 20 16V9L17 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H12C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 20H15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 7V8C18 8.26522 18.1054 8.51957 18.2929 8.70711C18.4804 8.89464 18.7348 9 19 9H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73040">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
