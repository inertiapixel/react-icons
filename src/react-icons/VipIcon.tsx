import React from "react";

export const VipIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60278)">
<path d="M3 5H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9L6 15H7L9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15V9H18C18.5304 9 19.0391 9.21071 19.4142 9.58579C19.7893 9.96086 20 10.4696 20 11C20 11.5304 19.7893 12.0391 19.4142 12.4142C19.0391 12.7893 18.5304 13 18 13H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60278">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
