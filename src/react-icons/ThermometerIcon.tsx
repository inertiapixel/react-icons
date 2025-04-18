import React from "react";

export const ThermometerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61727)">
<path d="M19 5.00048C19.2627 5.26309 19.4711 5.57489 19.6133 5.91805C19.7554 6.26122 19.8286 6.62903 19.8286 7.00048C19.8286 7.37193 19.7554 7.73974 19.6133 8.08291C19.4711 8.42607 19.2627 8.73786 19 9.00048L11 17.0005H7V13.0005L15 5.00048C15.2626 4.73778 15.5744 4.5294 15.9176 4.38723C16.2607 4.24505 16.6285 4.17187 17 4.17188C17.3715 4.17187 17.7393 4.24505 18.0824 4.38723C18.4256 4.5294 18.7374 4.73778 19 5.00048Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7L14.5 5.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10L11.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13L8.5 11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17L4 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61727">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
