import React from "react";

export const GolfOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72711)">
<path d="M12 18V12M12 8V3L19 7L13.93 9.897"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17.6719C8.38 18.0319 8 18.4919 8 19.0019C8 20.1019 9.8 21.0019 12 21.0019C14.2 21.0019 16 20.1019 16 19.0019C16 18.5019 15.62 18.0319 15 17.6719"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72711">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
