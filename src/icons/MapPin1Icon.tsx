import React from "react";

export const MapPin1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69374)">
<path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.657 16.6567L13.414 20.8997C13.039 21.2743 12.5306 21.4848 12.0005 21.4848C11.4704 21.4848 10.962 21.2743 10.587 20.8997L6.343 16.6567C5.22422 15.5379 4.46234 14.1124 4.15369 12.5606C3.84504 11.0087 4.00349 9.40022 4.60901 7.93844C5.21452 6.47665 6.2399 5.22725 7.55548 4.34821C8.87107 3.46918 10.4178 3 12 3C13.5822 3 15.1289 3.46918 16.4445 4.34821C17.7601 5.22725 18.7855 6.47665 19.391 7.93844C19.9965 9.40022 20.155 11.0087 19.8463 12.5606C19.5377 14.1124 18.7758 15.5379 17.657 16.6567Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69374">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
