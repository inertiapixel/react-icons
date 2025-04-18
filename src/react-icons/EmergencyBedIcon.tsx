import React from "react";

export const EmergencyBedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74871)">
<path d="M14 18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18C18 17.4696 17.7893 16.9609 17.4142 16.5858C17.0391 16.2107 16.5304 16 16 16C15.4696 16 14.9609 16.2107 14.5858 16.5858C14.2107 16.9609 14 17.4696 14 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18C10 17.4696 9.78929 16.9609 9.41421 16.5858C9.03914 16.2107 8.53043 16 8 16C7.46957 16 6.96086 16.2107 6.58579 16.5858C6.21071 16.9609 6 17.4696 6 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8L6.1 10.8C6.37944 11.1726 6.74179 11.475 7.15836 11.6833C7.57493 11.8916 8.03426 12 8.5 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V14L9.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 16.5L12 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74871">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
