import React from "react";

export const Jetpack1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71194)">
<path d="M10 6C10 5.60603 9.9224 5.21593 9.77164 4.85195C9.62087 4.48797 9.3999 4.15726 9.12132 3.87868C8.84274 3.6001 8.51203 3.37913 8.14805 3.22836C7.78407 3.0776 7.39397 3 7 3C6.60603 3 6.21593 3.0776 5.85195 3.22836C5.48797 3.37913 5.15726 3.6001 4.87868 3.87868C4.6001 4.15726 4.37913 4.48797 4.22836 4.85195C4.0776 5.21593 4 5.60603 4 6V13H10V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13H20V6C20 5.20435 19.6839 4.44129 19.1213 3.87868C18.5587 3.31607 17.7956 3 17 3C16.2044 3 15.4413 3.31607 14.8787 3.87868C14.3161 4.44129 14 5.20435 14 6V13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16C5 18.333 5.667 20 7 21C8.333 20 9 18.333 9 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 16C15 18.333 15.667 20 17 21C18.333 20 19 18.333 19 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71194">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
