import React from "react";

export const ShieldDollarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64038)">
<path d="M13.0169 20.687C12.6839 20.806 12.3439 20.91 11.9989 21C10.4421 20.5962 8.98234 19.8836 7.7064 18.9045C6.43047 17.9254 5.36437 16.6998 4.57145 15.3005C3.77854 13.9013 3.27499 12.3569 3.09073 10.7592C2.90647 9.16147 3.04527 7.54302 3.49886 6C6.61439 6.14257 9.66303 5.06658 11.9989 3C14.3347 5.06658 17.3833 6.14257 20.4989 6C20.9319 7.472 21.0739 8.998 20.9349 10.495"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15H18.5C18.1022 15 17.7206 15.158 17.4393 15.4393C17.158 15.7206 17 16.1022 17 16.5C17 16.8978 17.158 17.2794 17.4393 17.5607C17.7206 17.842 18.1022 18 18.5 18H19.5C19.8978 18 20.2794 18.158 20.5607 18.4393C20.842 18.7206 21 19.1022 21 19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V22M19 14V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64038">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
