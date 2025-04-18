import React from "react";

export const EyeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74603)">
<path d="M10.5856 10.5859C10.2105 10.9611 9.99991 11.4698 10 12.0003C10.0001 12.5307 10.2109 13.0394 10.5861 13.4144C10.9612 13.7895 11.47 14.0001 12.0004 14C12.5309 13.9999 13.0395 13.7891 13.4146 13.4139"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.681 16.673C15.2782 17.5507 13.6547 18.0109 12 18C8.4 18 5.4 16 3 12C4.272 9.88003 5.712 8.32203 7.32 7.32603M10.18 6.18003C10.779 6.05876 11.3888 5.99845 12 6.00003C15.6 6.00003 18.6 8.00003 21 12C20.334 13.11 19.621 14.067 18.862 14.87"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74603">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
