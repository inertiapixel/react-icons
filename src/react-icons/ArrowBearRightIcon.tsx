import React from "react";

export const ArrowBearRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85531)">
<path d="M12 3H17V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3L9.464 10.536C8.52686 11.4734 8.00028 12.7445 8 14.07V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85531">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
