import React from "react";

export const STurnDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64695)">
<path d="M7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7C4.46957 7 3.96086 6.78929 3.58579 6.41421C3.21071 6.03914 3 5.53043 3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3C5.53043 3 6.03914 3.21071 6.41421 3.58579C6.78929 3.96086 7 4.46957 7 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 7V16.5C5 17.4283 5.36875 18.3185 6.02513 18.9749C6.6815 19.6313 7.57174 20 8.5 20C9.42826 20 10.3185 19.6313 10.9749 18.9749C11.6313 18.3185 12 17.4283 12 16.5V7.5C12 6.57174 12.3687 5.6815 13.0251 5.02513C13.6815 4.36875 14.5717 4 15.5 4C16.4283 4 17.3185 4.36875 17.9749 5.02513C18.6313 5.6815 19 6.57174 19 7.5V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 18L19 21L22 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64695">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
