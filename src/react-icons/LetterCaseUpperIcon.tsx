import React from "react";

export const LetterCaseUpperIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70670)">
<path d="M3 19V8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5C7.42826 5 8.3185 5.36875 8.97487 6.02513C9.63125 6.6815 10 7.57174 10 8.5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 19V8.5C14 7.57174 14.3687 6.6815 15.0251 6.02513C15.6815 5.36875 16.5717 5 17.5 5C18.4283 5 19.3185 5.36875 19.9749 6.02513C20.6313 6.6815 21 7.57174 21 8.5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70670">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
