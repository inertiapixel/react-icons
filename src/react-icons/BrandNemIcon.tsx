import React from "react";

export const BrandNemIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81888)">
<path d="M12.182 2C14.122 2.022 16.061 2.382 18 3.08L18.364 3.215C19.626 3.70227 20.8427 4.29957 22 5C22 10.618 20.043 15.258 16.13 18.92C14.89 20.159 13.63 21.124 12.35 21.818L12 22C10.6 21.297 9.223 20.271 7.87 18.921C3.958 15.258 2 10.618 2 5C4.545 3.473 7.09 2.529 9.636 2.168L10 2.12C10.6034 2.04712 11.2103 2.00706 11.818 2H12.182Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.10156 7.06813C4.17456 13.7881 7.47456 14.7651 12.0016 9.99813C12.0016 5.99813 13.3586 3.64513 16.0716 2.93813L16.6616 2.82812"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.35 18.51C16.35 18.51 19 13 12 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81888">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
