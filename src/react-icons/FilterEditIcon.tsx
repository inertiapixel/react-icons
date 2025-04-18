import React from "react";

export const FilterEditIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73781)">
<path d="M10.97 20.344L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.42 15.6112C18.615 15.4162 18.8465 15.2615 19.1013 15.156C19.3561 15.0504 19.6292 14.9961 19.905 14.9961C20.1808 14.9961 20.4539 15.0504 20.7087 15.156C20.9635 15.2615 21.195 15.4162 21.39 15.6112C21.585 15.8062 21.7397 16.0377 21.8452 16.2925C21.9508 16.5473 22.0051 16.8204 22.0051 17.0962C22.0051 17.372 21.9508 17.6451 21.8452 17.8999C21.7397 18.1547 21.585 18.3862 21.39 18.5812L18 22.0012H15V19.0012L18.42 15.6112Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73781">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
