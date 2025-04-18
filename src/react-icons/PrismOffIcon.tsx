import React from "react";

export const PrismOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65782)">
<path d="M12 12V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.957 17.952L13.02 21.655C12.7257 21.8757 12.3678 21.995 12 21.995C11.6322 21.995 11.2743 21.8757 10.98 21.655L5 17.17C4.68951 16.9371 4.4375 16.6352 4.26393 16.288C4.09036 15.9409 4 15.5581 4 15.17V4M7 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V15.17C20 15.42 19.963 15.665 19.891 15.899"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6875 8.70078C12.8148 8.64434 12.9347 8.57247 13.0445 8.48678L19.6995 3.30078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65782">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
