import React from "react";

export const BrandMetaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81930)">
<path d="M12 10.174C13.766 7.39 15.315 6 16.648 6C18.648 6 19.911 8.213 20.648 11.217C21.352 14.086 21.148 18 18.648 18C17.534 18 16 16.435 14.5 14.348C13.5455 13.0329 12.709 11.6361 12 10.174Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9996 10.174C10.2336 7.39 8.68463 6 7.35163 6C5.35163 6 4.08863 8.213 3.35163 11.217C2.64763 14.086 2.85163 18 5.35163 18C6.46563 18 7.99963 16.435 9.49963 14.348C10.4996 12.957 11.3326 11.565 11.9996 10.174Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81930">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
