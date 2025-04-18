import React from "react";

export const FishBoneIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73638)">
<path d="M16.69 7.44141C15.5977 8.70935 14.9979 10.3279 15 12.0014C14.9975 13.6799 15.6007 15.303 16.699 16.5724C18.613 15.8884 20.39 14.3894 22 12.0074C20.387 9.62341 18.606 8.12441 16.688 7.44241"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9.50391C2.77125 10.3727 3.57932 11.2082 4.422 12.0079C3.57853 12.8048 2.77042 13.6382 2 14.5059"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.42188 12H14.9999"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73638">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
