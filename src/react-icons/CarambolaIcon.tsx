import React from "react";

export const CarambolaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80011)">
<path d="M17.2862 21.09C16.1596 21.0907 14.3969 20.219 11.9982 18.475C9.60091 20.2197 7.83824 21.0917 6.71024 21.091C4.89291 21.091 4.72791 18.8243 6.21524 14.291C-0.0440931 9.77433 0.667573 7.516 8.35024 7.516H8.42624C9.61624 3.83867 10.8076 2 12.0002 2C13.1902 2 14.3816 3.83867 15.5742 7.516H15.6502C23.3336 7.516 24.0446 9.774 17.7832 14.29C19.2699 18.8247 19.1042 21.0913 17.2862 21.09Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80011">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
