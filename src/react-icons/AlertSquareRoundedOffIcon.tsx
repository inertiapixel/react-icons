import React from "react";

export const AlertSquareRoundedOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86062)">
<path d="M19.201 19.199C17.851 20.549 15.601 21 12 21C4.8 21 3 19.2 3 12C3 8.402 3.45 6.153 4.797 4.803M7.423 3.427C8.627 3.12 10.132 3 12 3C19.2 3 21 4.8 21 12C21 13.865 20.88 15.367 20.575 16.57"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86062">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
