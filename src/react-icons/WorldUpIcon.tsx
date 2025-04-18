import React from "react";

export const WorldUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59571)">
<path d="M20.9849 12.5212C21.0906 10.6992 20.6399 8.88818 19.6925 7.3283C18.7452 5.76842 17.3461 4.53339 15.6806 3.78703C14.0152 3.04068 12.1623 2.81827 10.3675 3.1493C8.57278 3.48033 6.92109 4.34917 5.63153 5.64056C4.34197 6.93195 3.47548 8.58487 3.14699 10.3801C2.81851 12.1753 3.04355 14.0279 3.79226 15.6923C4.54098 17.3566 5.77799 18.7541 7.33922 19.6992C8.90045 20.6443 10.7121 21.0924 12.5339 20.9842"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H14.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.6412 6.43067 15.489 10.5124 14.891 14.512"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59571">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
