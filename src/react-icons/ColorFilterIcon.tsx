import React from "react";

export const ColorFilterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78081)">
<path d="M13.58 13.7909C13.85 14.4709 14 15.2209 14 16.0009C14 17.7709 13.23 19.3709 12 20.4609C10.9053 21.455 9.47871 22.0043 8 22.0009C4.69 22.0009 2 19.3109 2 16.0009C2 13.2409 3.88 10.9009 6.42 10.2109"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.58 10.2109C20.12 10.9009 22 13.2409 22 16.0009C22 19.3109 19.31 22.0009 16 22.0009C14.5213 22.0043 13.0947 21.455 12 20.4609"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8C6 9.5913 6.63214 11.1174 7.75736 12.2426C8.88258 13.3679 10.4087 14 12 14C13.5913 14 15.1174 13.3679 16.2426 12.2426C17.3679 11.1174 18 9.5913 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78081">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
