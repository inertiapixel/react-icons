import React from "react";

export const BrandVkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81247)">
<path d="M14 19H10C7.87827 19 5.84344 18.1571 4.34315 16.6569C2.84285 15.1566 2 13.1217 2 11V6H6V11C6 12.0609 6.42143 13.0783 7.17157 13.8284C7.92172 14.5786 8.93913 15 10 15V6H14V10.5H14.03C15.126 10.3632 16.1343 9.83086 16.8654 9.00292C17.5965 8.17498 18 7.10852 18 6.004H22L21.658 7.715C21.4532 8.73909 21.0171 9.70286 20.3832 10.5328C19.7493 11.3628 18.9341 12.037 18 12.504C18.9083 12.8066 19.7186 13.3479 20.346 14.0711C20.9734 14.7944 21.3947 15.673 21.566 16.615L22 19.004H18C18 17.8995 17.5965 16.833 16.8654 16.0051C16.1343 15.1771 15.126 14.6448 14.03 14.508V19.008L14 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81247">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
