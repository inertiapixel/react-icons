import React from "react";

export const SpyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63189)">
<path d="M3 11H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 11V7C5 6.20435 5.31607 5.44129 5.87868 4.87868C6.44129 4.31607 7.20435 4 8 4H16C16.7956 4 17.5587 4.31607 18.1213 4.87868C18.6839 5.44129 19 6.20435 19 7V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17C4 17.394 4.0776 17.7841 4.22836 18.1481C4.37913 18.512 4.6001 18.8427 4.87868 19.1213C5.15726 19.3999 5.48797 19.6209 5.85195 19.7716C6.21593 19.9224 6.60603 20 7 20C7.39397 20 7.78407 19.9224 8.14805 19.7716C8.51203 19.6209 8.84274 19.3999 9.12132 19.1213C9.3999 18.8427 9.62087 18.512 9.77164 18.1481C9.9224 17.7841 10 17.394 10 17C10 16.606 9.9224 16.2159 9.77164 15.8519C9.62087 15.488 9.3999 15.1573 9.12132 14.8787C8.84274 14.6001 8.51203 14.3791 8.14805 14.2284C7.78407 14.0776 7.39397 14 7 14C6.60603 14 6.21593 14.0776 5.85195 14.2284C5.48797 14.3791 5.15726 14.6001 4.87868 14.8787C4.6001 15.1573 4.37913 15.488 4.22836 15.8519C4.0776 16.2159 4 16.606 4 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17C14 17.7956 14.3161 18.5587 14.8787 19.1213C15.4413 19.6839 16.2044 20 17 20C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17C20 16.2044 19.6839 15.4413 19.1213 14.8787C18.5587 14.3161 17.7956 14 17 14C16.2044 14 15.4413 14.3161 14.8787 14.8787C14.3161 15.4413 14 16.2044 14 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63189">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
