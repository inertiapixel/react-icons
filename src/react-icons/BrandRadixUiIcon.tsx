import React from "react";

export const BrandRadixUiIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81669)">
<path d="M14 5.5C14 6.16304 14.2634 6.79893 14.7322 7.26777C15.2011 7.73661 15.837 8 16.5 8C17.163 8 17.7989 7.73661 18.2678 7.26777C18.7366 6.79893 19 6.16304 19 5.5C19 4.83696 18.7366 4.20107 18.2678 3.73223C17.7989 3.26339 17.163 3 16.5 3C15.837 3 15.2011 3.26339 14.7322 3.73223C14.2634 4.20107 14 4.83696 14 5.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 3H11V8H6V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.0014 11V21C9.69519 20.9983 8.44154 20.4856 7.50855 19.5714C6.57557 18.6573 6.03734 17.4144 6.00899 16.1085C5.98064 14.8027 6.46442 13.5376 7.35685 12.5838C8.24927 11.63 9.47949 11.0634 10.7844 11.005L11.0014 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81669">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
