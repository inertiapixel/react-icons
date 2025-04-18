import React from "react";

export const IdOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71406)">
<path d="M8 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V17M19.563 19.561C19.108 19.84 18.573 20 18 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 5.917 3.573 4.969 4.433 4.441"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.17439 8.17969C7.87999 8.31311 7.62232 8.5159 7.42344 8.77069C7.22456 9.02548 7.09039 9.32468 7.03242 9.64266C6.97446 9.96064 6.99442 10.2879 7.09061 10.5965C7.1868 10.9051 7.35634 11.1857 7.58472 11.4145C7.8131 11.6432 8.09351 11.8132 8.40194 11.9098C8.71037 12.0065 9.03763 12.0269 9.3557 11.9694C9.67377 11.912 9.97316 11.7782 10.2283 11.5797C10.4833 11.3812 10.6865 11.1239 10.8204 10.8297"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71406">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
