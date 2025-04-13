import React from "react";

export const SkateboardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63596)">
<path d="M5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17C7.53043 17 8.03914 16.7893 8.41421 16.4142C8.78929 16.0391 9 15.5304 9 15C9 14.4696 8.78929 13.9609 8.41421 13.5858C8.03914 13.2107 7.53043 13 7 13C6.46957 13 5.96086 13.2107 5.58579 13.5858C5.21071 13.9609 5 14.4696 5 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15C15 15.5304 15.2107 16.0391 15.5858 16.4142C15.9609 16.7893 16.4696 17 17 17C17.5304 17 18.0391 16.7893 18.4142 16.4142C18.7893 16.0391 19 15.5304 19 15C19 14.4696 18.7893 13.9609 18.4142 13.5858C18.0391 13.2107 17.5304 13 17 13C16.4696 13 15.9609 13.2107 15.5858 13.5858C15.2107 13.9609 15 14.4696 15 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9C3 9.26522 3.21071 9.51957 3.58579 9.70711C3.96086 9.89464 4.46957 10 5 10H19C19.5304 10 20.0391 9.89464 20.4142 9.70711C20.7893 9.51957 21 9.26522 21 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63596">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
