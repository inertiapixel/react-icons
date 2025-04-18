import React from "react";

export const Diamonds1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75418)">
<path d="M10.831 20.4123L5.456 13.5023C4.848 12.7193 4.848 11.2793 5.456 10.5023L10.831 3.59126C10.9666 3.40901 11.1429 3.26098 11.3459 3.159C11.5488 3.05702 11.7728 3.00391 12 3.00391C12.2272 3.00391 12.4512 3.05702 12.6541 3.159C12.8571 3.26098 13.0334 3.40901 13.169 3.59126L18.544 10.5013C19.152 11.2843 19.152 12.7243 18.544 13.5013L13.169 20.4123C13.0334 20.5945 12.8571 20.7425 12.6541 20.8445C12.4512 20.9465 12.2272 20.9996 12 20.9996C11.7728 20.9996 11.5488 20.9465 11.3459 20.8445C11.1429 20.7425 10.9666 20.5945 10.831 20.4123Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75418">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
